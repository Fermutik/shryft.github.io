"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
})

export const NotifyForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        alert("Дякуємо! Ми повідомимо вас про запуск.");
        console.log("Email submitted:", values);
    }

    const { isSubmitting, isValid } = form.formState

    return (
        <div className="text-center p-8 rounded-lg shadow-xl bg-white dark:bg-gray-900 max-w-md w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Скоро!
            </h1>

            <div className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                <div>Щось неймовірне наближається.</div>
                <div>Слідкуйте за оновленнями!</div>
            </div>
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
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                © 2025 shryft.com . Всі права захищені.
            </p>
        </div>
    )
}