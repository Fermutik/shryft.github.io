"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState, useRef } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Attach from "@/components/icons/attach"
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
import { Textarea } from "@/components/ui/textarea"

// Import custom PhoneInput component that uses @react-input/mask and shadcn's Input
import PhoneInput from "@/components/phone-input"

import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils"

export const ZakazForm = ({ t, lang }: BasePageProps) => {
    // Get translation function for the "zakaz-form" namespace
    t = getT(lang, "zakaz-form")

    // Define form schema using translations for validation messages.
    // The schema is defined inside the component so that t() is available.
    const formSchema = z.object({
        email: z.string().email({ message: t("InvalidEmail") }),
        username: z.string().min(1).max(50),
        tel: z.string().length(17, { message: t("InvalidPhone") }),
        comment: z.string().max(500),
    })

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

    return (
        <div className="text-center p-2 rounded-lg shadow-xl w-full">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col items-start w-full"
                >
                    <div className="flex flex-row w-full space-x-2">
                        <div className="flex flex-col space-y-4 w-[360px]">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder={t("Name")}
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
                                                    className="w-full"
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
                                                    className="w-full"
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
                            <div className="flex flex-row w-full space-x-2">
                                <Button disabled={!isValid || isSubmitting} type="submit">
                                    {t("Submit")}
                                </Button>
                                <Button type="button" onClick={() => fileInputRef.current?.click()}>
                                    {t("SelectFile")}
                                </Button>
                                <Button type="button" onClick={handleReset}>
                                    {t("Reset")}
                                </Button>
                                <div
                                    className="flex justify-center items-center w-[24px]"
                                    title={selectedFile ? selectedFile.name : ""}
                                >
                                    {selectedFile && <Attach />}
                                </div>

                            </div>
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
                                                className="w-[176px] resize-none h-22 overflow-y-scroll box-border"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
