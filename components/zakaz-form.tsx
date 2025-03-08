"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
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

const formSchema = z.object({
    email: z.string().email({
        message: "Невірна адреса електронної пошти",
    }),
})

export const NotifyForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    // State to control the open state of AlertDialog
    const [alertOpen, setAlertOpen] = useState(false)

    // Form submit handler: open the alert dialog instead of calling alert()
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Log form submission (for debugging)
        console.log("Form submitted with:", values)
        // Open the AlertDialog
        setAlertOpen(true)
        form.reset()
    }

    const { isSubmitting, isValid } = form.formState

    return (
        <div className="text-center p-8 rounded-lg shadow-xl max-w-md w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-4 flex flex-col items-start w-full">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="w-full" placeholder="Ваш email" {...field} disabled={isSubmitting} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={!isValid || isSubmitting} type="submit" className="w-full">Повідомити мене</Button>
                </form>
            </Form>
            <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Дякуємо!</AlertDialogTitle>
                        <AlertDialogDescription>
                            Ми зв'яжемося з вами, як тільки проект набуде фінального вигляду.
                            Будьте з нами, адже попереду багато цікавого!
                        </AlertDialogDescription>
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