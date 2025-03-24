"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as React from "react"
import { useForm } from "react-hook-form"
import { useState, useRef, useEffect } from "react"
import { z } from "zod"

// Add type declaration for Cloudflare Turnstile
declare global {
    interface Window {
        turnstile?: {
            render: (container: HTMLElement, options: any) => void;
        };
    }
}

import { Button } from "@/components/ui/button"
import Attach from "@/components/icons/attach"
import { CalendarIcon } from "lucide-react"
import { uk, ru } from "react-day-picker/locale";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

// Import custom PhoneInput component that uses @react-input/mask and shadcn's Input
import PhoneInput from "@/components/phone-input"

export interface BasePageProps {
    lang: string;
}
import { getT } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

/**
 * Helper function to read a file as a base64 encoded string.
 * It returns the base64 string (without the data prefix).
 */
const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const result = reader.result
            if (typeof result === "string") {
                // Remove the data URL prefix (e.g. "data:application/octet-stream;base64,")
                const base64 = result.split(",")[1]
                resolve(base64)
            } else {
                reject("Failed to read file as base64 string")
            }
        }
        reader.onerror = (error) => reject(error)
    })
}

/**
 * This component represents a form for user submissions,
 * including a Cloudflare Turnstile captcha for spam protection.
 *
 * The form submission sends a JSON payload (including an optional file)
 * to an AWS API Gateway endpoint, which invokes a Lambda function for processing.
 */
export const ZakazForm = ({ lang }: BasePageProps) => {
    // Get translation function for the "zakaz-form" namespace
    const t = getT(lang, "zakaz-form")

    // Track component mount state to render captcha only on the client side
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    // Reference to the DOM element for Turnstile captcha
    const captchaRef = useRef<HTMLDivElement>(null)
    // State to store the captcha token
    const [captchaToken, setCaptchaToken] = useState<string>("")

    // Initialize the Turnstile widget once the component is mounted
    useEffect(() => {
        if (mounted && window.turnstile && captchaRef.current) {
            window.turnstile.render(captchaRef.current, {
                sitekey: "0x4AAAAAABB8ZIgIv9VSjJkC",
                // Callback returns the captcha token on success
                callback: (token: string) => {
                    setCaptchaToken(token)
                },
            })
        }
    }, [mounted])

    // Define the form schema using Zod for validation
    const formSchema = z.object({
        email: z.string().email({ message: t("InvalidEmail") }),
        username: z.string().min(1, { message: t("UsernameRequired") }).max(50, { message: t("UsernameTooLong") }),
        tel: z.string().length(17, { message: t("InvalidPhone") }),
        comment: z.string().max(500, { message: t("CommentTooLong") }),
        dob: z.date().optional(),
    })

    // Initialize React Hook Form with Zod resolver
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            tel: "",
            username: "",
            comment: "",
        },
    })

    // Dialog states
    const [alertOpen, setAlertOpen] = useState(false)        // for successful submission
    const [fileErrorOpen, setFileErrorOpen] = useState(false) // for file size errors
    const [serverErrorOpen, setServerErrorOpen] = useState(false) // for server errors

    // State to hold the selected file from the file input
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    // Reference for the hidden file input element
    const fileInputRef = useRef<HTMLInputElement>(null)

    // File input change handler:
    // Check approximate file size limit (4 MB) before base64 encoding
    // to keep total payload under ~6 MB after encoding
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null
        if (file) {
            // Checking 4 MB limit
            if (file.size > 4 * 1024 * 1024) {
                setFileErrorOpen(true)
                if (fileInputRef.current) {
                    fileInputRef.current.value = ""
                }
                return
            }
            setSelectedFile(file)
        }
    }

    /**
     * onSubmit handler: builds a JSON object with form fields,
     * captcha token and an optional file (base64 encoded, if present),
     * then checks final payload size and sends it to the API Gateway endpoint.
     */
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Convert date to an ISO string (YYYY-MM-DD)
            const dobString = values.dob ? values.dob.toISOString().split("T")[0] : null

            // Convert file to base64 if selected
            let fileName: string | null = null
            let fileContent: string | null = null
            if (selectedFile) {
                fileName = selectedFile.name
                fileContent = await readFileAsBase64(selectedFile)
            }

            // Build JSON payload
            const dataToSend = {
                username: values.username,
                email: values.email,
                tel: values.tel,
                comment: values.comment,
                dob: dobString,
                captcha_token: captchaToken,
                file_name: fileName,
                file_content: fileContent,
            }

            const requestBody = JSON.stringify(dataToSend)
            const sizeInBytes = new Blob([requestBody]).size

            // 6 MB limit
            const maxPayloadSize = 6 * 1024 * 1024 // 6,291,456 bytes
            if (sizeInBytes > maxPayloadSize) {
                console.error("Payload size exceeds 6 MB. Current size:", sizeInBytes)
                setFileErrorOpen(true)
                return
            }

            // Send POST request with JSON payload
            const response = await fetch("https://k2reyxgqu6.execute-api.eu-north-1.amazonaws.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: requestBody,
            })

            if (!response.ok) {
                console.error("Error from server:", response.status, response.statusText)
                setServerErrorOpen(true) // Open dialog for server error
                return
            }

            const respJson = await response.json()
            console.log("Server response:", respJson)

            // On success, show alert dialog and reset form
            setAlertOpen(true)
            form.reset()
            setSelectedFile(null)
        } catch (error) {
            console.error("Error submitting form:", error)
            // In case of network errors, etc. we also show server error
            setServerErrorOpen(true)
        }
    }

    // Reset handler: clears the form and the selected file
    const handleReset = () => {
        form.reset()
        setSelectedFile(null)
    }

    const { isSubmitting } = form.formState
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const locale = lang === "ua" ? uk : ru

    return (
        <div className="text-center p-2 rounded-lg shadow-xl w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start w-full space-x-2">
                    <div className="flex flex-col space-y-4 w-full">

                        {/* Username field */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder={t("Name")}
                                            className="bg-background"
                                            {...field}
                                            disabled={isSubmitting}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Phone and Email fields */}
                        <div className="flex flex-row space-x-2">
                            <FormField
                                control={form.control}
                                name="tel"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <PhoneInput
                                                placeholder="+38(___)___-__-__"
                                                className="w-full bg-background"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder={t("Email")}
                                                className="w-full bg-background"
                                                {...field}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Date picker field */}
                        <div className="flex flex-col">
                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <div className="flex flex-row w-full pr-2">
                                                        <Button
                                                            variant={"outline"}
                                                            type="button"
                                                            className={cn(
                                                                "w-1/2 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "P", { locale })
                                                            ) : (
                                                                <span>{t("desiredCompletionDay")}</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                        <div className="w-1/2"></div>
                                                    </div>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    locale={locale}
                                                    // Example: disable past dates
                                                    disabled={(date) => {
                                                        const today = new Date()
                                                        today.setHours(0, 0, 0, 0)
                                                        return date < today
                                                    }}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Comment field */}
                        <div className="flex flex-col">
                            <FormField
                                control={form.control}
                                name="comment"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder={t("Message")}
                                                wrap="soft"
                                                className="bg-background h-22 overflow-y-scroll box-border"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Cloudflare Turnstile container */}
                        {mounted && (
                            <div
                                ref={captchaRef}
                                data-size="flexible"
                                className="cf-turnstile"
                                data-sitekey="0x4AAAAAABB8ZIgIv9VSjJkC"
                            />
                        )}

                        {/* Submit, Reset, and File Selection Buttons */}
                        <div className="flex flex-row w-full space-x-2 mt-2">
                            <Button type="submit" disabled={isSubmitting}>
                                {t("Submit")}
                            </Button>
                            <Button variant="outline" type="button" onClick={handleReset}>
                                {t("Reset")}
                            </Button>
                            <Button
                                variant="outline"
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                {t("SelectFile")}
                            </Button>
                            {selectedFile && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Attach />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{selectedFile.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                        </div>
                    </div>

                    {/* Hidden file input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </form>
            </Form>

            {/* AlertDialog for successful submission */}
            <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t("Thanks")}</AlertDialogTitle>
                        <AlertDialogDescription>{t("Acknowledgment")}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setAlertOpen(false)}>
                            OK
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* AlertDialog for file size error */}
            <AlertDialog open={fileErrorOpen} onOpenChange={setFileErrorOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Error</AlertDialogTitle>
                        <AlertDialogDescription>
                            {t("FileSizeExceeded")}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setFileErrorOpen(false)}>
                            OK
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* AlertDialog for server error */}
            <AlertDialog open={serverErrorOpen} onOpenChange={setServerErrorOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Ошибка</AlertDialogTitle>
                        <AlertDialogDescription>
                            {t("ServerError")}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setServerErrorOpen(false)}>
                            ОК
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
