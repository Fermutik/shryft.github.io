"use client";

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { BasePageProps } from "./_page";


export default function HomePage({ t, lang }: BasePageProps) {

    return (
        <SidebarProvider>
            <AppSidebar t={t} lang={lang} />
            <SidebarInset>
                <div className="flex flex-col justify-center items-center">
                    <Navbar t={t} lang={lang} />
                    <div className="flex flex-row justify-start w-full h-screen"></div>
                    <Footer t={t} lang={lang} />
                </div >
            </SidebarInset>
        </SidebarProvider>
    );
}
