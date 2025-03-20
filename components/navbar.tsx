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
                    <Link href={"/" + lang} className="flex flex-col items-center lg:pr-2 pr-2">
                        <Logo className="lg:w-[220px] w-[180px]" />
                        <div className="text-center">
                            <div className="text-xs lg:text-xs font-medium">
                                {t("reliable_printing_partner")}
                            </div>
                            <div className="text-xs lg:text-xs font-medium">
                                {t("always_near")}
                            </div>
                        </div>
                    </Link>
                    <img
                        className="hidden xl:block pr-4"
                        src="/banner.png"
                        alt="banner"
                    />
                    <div className=" lg:w-[220px] flex flex-col self-center items-start">
                        <div className="text-lg lg:text-xl font-bold tracking-wide">
                            {t("phone_number_1")}
                        </div>
                        <div className="text-lg lg:text-xl font-bold tracking-wide">
                            {t("phone_number_2")}
                        </div>
                        <div className="text-base lg:text-lg font-bold">{t("email")}</div>
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
