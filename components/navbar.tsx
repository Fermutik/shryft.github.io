import { ModeToggle } from "@/components/mode-toogle";
import Logo from "@/components/icons/logo";
import Link from "next/link";
import { getT } from "@/lib/utils";
import { BasePageProps } from "@/app/_page"

// Navbar component fixed at the top with the title on the left and the toggle on the right.
export const Navbar = ({ t, lang }: BasePageProps) => {
    t = getT(lang, "navbar");
    return (
        <div className="flex flex-col w-full">
            <div className="flex h-[130px] justify-center items-center">
                <div className="flex items-center space-x-4">
                    <Link href={"/"} className="h-fit w-fit">
                        <Logo className="w-[110px] h-[90px]" />
                    </Link>
                    <img className="hidden lg:block" src="https://placehold.co/730x110/cccccc/ffffff?Image+Placeholder" alt="Placeholder" />
                    <img src="https://placehold.co/205x110/cccccc/ffffff?Image+Placeholder" alt="Placeholder" />
                </div>
            </div>
            <div className="w-full text-sm lg:text-lg h-[50px] bg-black dark:bg-white text-white dark:text-black flex flex-row items-center justify-center">
                <h2 className="px-2 lg:px-4 hidden md:block flex-col items-center justify-center text-center leading-tight">
                    Малоформатна продукція
                </h2>
                <h2 className="px-2 lg:px-4 hidden md:block flex-col items-center justify-center text-center leading-tight">
                    Широкоформатна продукція
                </h2>
                <h2 className="px-2 lg:px-4 hidden md:block flex-col items-center justify-center text-center">
                    Послуги
                </h2>
                <h2 className="px-2 lg:px-4 hidden md:block flex-col items-center justify-center text-center">
                    Блог
                </h2>
                <h2 className="px-2 lg:px-4 hidden md:block flex-col items-center justify-center text-center">
                    Підтримка
                </h2>
                <h2 className="px-2 lg:px-4 hidden md:block flex-col items-center justify-center text-center">
                    Контакти
                </h2>
            </div>
        </div>
    );
};
