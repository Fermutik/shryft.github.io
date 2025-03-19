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
export const Navbar = ({ lang }: BasePageProps) => {
    const t = getT(lang, "navbar");
    return (
        <div className="flex flex-col w-full">
            {/* Top row with logo and images centered on the screen */}
            <div className="flex h-[130px] justify-center items-center">
                <div className="flex items-center">
                    <Link href={"/" + lang} className="flex justify-end items-center lg:pr-2 pr-2">
                        <svg className="lg:w-[220px] w-[180px] h-[125px]" xmlns="http://www.w3.org/2000/svg">
                            <image href="/logo.svg" width="100%" height="100%" />
                        </svg>
                    </Link>
                    <img
                        className="hidden xl:block pr-4"
                        src="/banner.png"
                        alt="banner"
                    />
                    <div className=" lg:w-[220px] flex flex-col self-end items-start">
                        <div className="text-lg lg:text-xl font-bold tracking-wide">
                            097 898 - 18 - 61
                        </div>
                        <div className="text-lg lg:text-xl font-bold tracking-wide">
                            093 150 - 28 - 29
                        </div>
                        <div className="text-base lg:text-lg font-bold">PRINT@SHRYFT.COM</div>
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
                        <SiteNavigationMenu lang={lang} />
                    </div>
                </div>
            </div >
        </div >
    );
};
