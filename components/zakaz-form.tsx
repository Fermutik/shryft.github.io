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
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
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
 * This component represents a form for user submissions,
 * including a Cloudflare Turnstile captcha for spam protection.
 *
 * The form submission sends data (including an optional file) to an AWS API Gateway endpoint,
 * which invokes a Lambda function for further processing.
 */
export const ZakazForm = ({ lang }: BasePageProps) => {
    // Get translation function for the "zakaz-form" namespace
    const t = getT(lang, "zakaz-form")

    // Track component mount state to render captcha only on the client side
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Reference to the DOM element for Turnstile captcha
    const captchaRef = useRef<HTMLDivElement>(null);

    // State to store the captcha token
    const [captchaToken, setCaptchaToken] = useState<string>("");

    // Initialize the Turnstile widget once the component is mounted
    useEffect(() => {
        if (mounted && window.turnstile && captchaRef.current) {
            window.turnstile.render(captchaRef.current, {
                sitekey: "0x4AAAAAABB8ZIgIv9VSjJkC",
                // Callback function returns the captcha token on success
                callback: (token: string) => {
                    setCaptchaToken(token);
                },
            });
        }
    }, [mounted]);

    // Define the form schema using Zod for validation
    const formSchema = z.object({
        email: z.string().email({ message: t("InvalidEmail") }),
        username: z
            .string()
            .min(1, { message: t("UsernameRequired") })
            .max(50, { message: t("UsernameTooLong") }),
        tel: z.string().length(17, { message: t("InvalidPhone") }),
        comment: z.string().max(500, { message: t("CommentTooLong") }),
        dob: z.date().optional(),
    });

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

    // State to control the open state of AlertDialog
    const [alertOpen, setAlertOpen] = useState(false)
    // State to hold the selected file from the file input
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    // Ref for the hidden file input element
    const fileInputRef = useRef<HTMLInputElement>(null)

    // File input change handler: update state with the selected file
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null
        setSelectedFile(file)
    }

    /**
     * onSubmit handler: sends a POST request to API Gateway with form fields,
     * captcha token and an optional file (up to 50MB).
     */
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Convert date to an ISO string or any suitable string format
            const dobString = values.dob
                ? values.dob.toISOString().split("T")[0]
                : null;

            // If a file is selected, check its size (limit: 50MB)
            if (selectedFile && selectedFile.size > 50 * 1024 * 1024) {
                console.error("Selected file exceeds the 50MB size limit.");
                // Optionally, you can display an error message to the user here
                return;
            }

            // Create FormData to send both form fields and file
            const formData = new FormData();
            formData.append("username", values.username);
            formData.append("email", values.email);
            formData.append("tel", values.tel);
            formData.append("comment", values.comment);
            formData.append("dob", dobString || "");
            formData.append("captcha_token", captchaToken);
            if (selectedFile) {
                formData.append("file", selectedFile);
            }

            // Send a POST request to your API Gateway endpoint
            // Do not set Content-Type header manually when sending FormData
            const response = await fetch("https://k2reyxgqu6.execute-api.eu-north-1.amazonaws.com", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                console.error("Error from server:", response.status, response.statusText);
                // Optionally, display an error message to the user here
                return;
            }

            // Read the JSON response (if your Lambda returns a JSON body)
            const respJson = await response.json();
            console.log("Server response:", respJson);

            // If successful, open the AlertDialog
            setAlertOpen(true);

            // Reset the form fields and clear the selected file
            form.reset();
            setSelectedFile(null);
        } catch (error) {
            console.error("Error submitting form:", error);
            // Optionally, display an error message to the user here
        }
    }

    // Reset handler: clears the form and file
    const handleReset = () => {
        form.reset();
        setSelectedFile(null);
    }

    const { isSubmitting, isValid } = form.formState;
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const locale = lang === "ua" ? uk : ru;

    return (
        <div className="text-center p-2 rounded-lg shadow-xl w-full">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col items-start w-full space-x-2"
                >
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
                                                className="w-full bg-background"
                                                placeholder={t("Email")}
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
                                                    // Disable past dates, for example
                                                    disabled={(date) => {
                                                        const today = new Date();
                                                        today.setHours(0, 0, 0, 0);
                                                        return date < today;
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

                        {/* Buttons: Submit, Reset, File upload */}
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

            {/* AlertDialog to confirm successful submission */}
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
        </div>
    )
}
