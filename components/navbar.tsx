import { ModeToggle } from "@/components/mode-toogle";
import Logo from "@/components/icons/logo";
import Link from "next/link";
import { getT } from "@/lib/utils";
import { BasePageProps } from "@/app/_page";
import { SiteNavigationMenu } from "@/components/menu";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";

// Navbar component with two rows.
// Top row contains the Logo and images, centered on the screen.
// Bottom row uses grid layout with three columns to align SidebarTrigger exactly with the Logo.
export const Navbar = ({ t, lang }: BasePageProps) => {
    t = getT(lang, "navbar");
    return (
        <div className="flex flex-col w-full">
            {/* Top row with logo and images centered on the screen */}
            <div className="flex h-[130px] justify-center items-center">
                <div className="flex items-center space-x-4">
                    <Link href={"/"} className="flex lg:w-[180px] justify-end items-center">
                        <Logo className="w-[110px] h-[90px]" />
                    </Link>
                    <img
                        className="hidden lg:block"
                        src="/banner.png"
                        alt="P4"
                    />
                    <div className="flex flex-col self-end items-start">
                        <div className="text-lg lg:text-xl font-bold tracking-wide">
                            044 22 - 484 - 22
                        </div>
                        <div className="text-lg lg:text-xl font-bold tracking-wide">
                            098 166 - 28 - 46
                        </div>
                        <div className="text-base lg:text-lg font-bold">PRINT@SHRIFT.COM</div>
                    </div>
                </div>
            </div >
            {/* Bottom row with navigation menu and sidebar trigger */}
            < div className="w-full text-sm lg:text-lg h-[50px] bg-black dark:bg-white text-white dark:text-black" >
                <div className="container mx-auto grid grid-cols-3 items-center h-full">
                    {/* Left column: SidebarTrigger aligned with Logo */}
                    <div className="flex px-2 items-center">
                        <SidebarTrigger className="lg:hidden flex items-center justify-center" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4 lg:hidden flex"
                        />
                    </div>
                    {/* Center column: Navigation menu */}
                    <div className="flex justify-center">
                        <SiteNavigationMenu t={t} lang={lang} />
                    </div>
                </div>
            </div >
        </div >
    );
};
