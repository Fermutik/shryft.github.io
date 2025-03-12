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
                    <Link href={"/"} className="h-fit w-fit">
                        <Logo className="w-[110px] h-[90px]" />
                    </Link>
                    <img
                        className="hidden lg:block"
                        src="https://placehold.co/730x110/cccccc/ffffff?Image+Placeholder"
                        alt="Placeholder"
                    />
                    <img
                        src="https://placehold.co/205x110/cccccc/ffffff?Image+Placeholder"
                        alt="Placeholder"
                    />
                </div>
            </div>
            {/* Bottom row with navigation menu and sidebar trigger */}
            <div className="w-full text-sm lg:text-lg h-[50px] bg-black dark:bg-white text-white dark:text-black">
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
            </div>
        </div>
    );
};
