"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as React from "react"
import { useForm } from "react-hook-form"
import { useState, useRef } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Attach from "@/components/icons/attach"
import { CalendarIcon } from "lucide-react"
import { uk, ru } from "react-day-picker/locale";
import {
    Form,
    FormControl,
    FormDescription,
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

import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export const ZakazForm = ({ t, lang }: BasePageProps) => {
    // Get translation function for the "zakaz-form" namespace
    t = getT(lang, "zakaz-form")

    // Define form schema using translations for validation messages.
    // The schema is defined inside the component so that t() is available.
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

    // Initialize React Hook Form with Zod validation
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

    // Form submit handler: open the alert dialog and reset the form
    function onSubmit(values: z.infer<typeof formSchema>) {
        setAlertOpen(true)
        form.reset()
        setSelectedFile(null)
    }

    // Reset handler: очистка формы и сброс выбранного файла
    const handleReset = () => {
        form.reset()
        setSelectedFile(null)
    }

    const { isSubmitting, isValid } = form.formState
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const locale = lang === "ua" ? uk : ru;

    return (
        <div className="text-center p-2 rounded-lg shadow-xl w-full">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col items-start w-full space-x-2"
                >
                    <div className="flex flex-col space-y-4 w-full">
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

                        <div className="flex flex-row w-full space-x-2 mt-2">
                            <Button type="submit">
                                {t("Submit")}
                            </Button>
                            <Button variant="outline" type="button" onClick={handleReset}>
                                {t("Reset")}
                            </Button>
                            <Button variant="outline" type="button" onClick={() => fileInputRef.current?.click()}>
                                {t("SelectFile")}
                            </Button>
                            {selectedFile && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Attach /></TooltipTrigger>
                                        <TooltipContent>
                                            <p> {selectedFile.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            )}
                        </div>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </form>
            </Form>
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
        </div >
    )
}
