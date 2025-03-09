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
            <div className="flex h-[130px] justify-between items-center">
                <div className="flex items-center space-x-4 ml-[210px]">
                    <Link href={"/"} className="h-fit w-fit">
                        <Logo className="w-[110px] h-[90px]" />
                    </Link>
                    <img src="https://placehold.co/500x110/cccccc/ffffff?Image+Placeholder" alt="Placeholder" />
                    <img src="https://placehold.co/155x110/cccccc/ffffff?Image+Placeholder" alt="Placeholder" />
                </div>
            </div>
            <div className="w-full h-[50px] bg-black dark:bg-white text-white dark:text-black flex flex-row items-center justify-start">
                <div className="w-[210px]"></div>
                <h2 className="w-[200px] flex flex-col items-center justify-center text-center leading-tight">
                    Малоформатна продукція
                </h2>
                <h2 className="w-[140px] flex flex-col items-center justify-center text-center leading-tight">
                    Широкоформатна продукція
                </h2>
                <h2 className="w-[140px] flex flex-col items-center justify-center text-center">
                    Послуги
                </h2>
                <h2 className="w-[60px] flex flex-col items-center justify-center text-center">
                    Блог
                </h2>
                <h2 className="w-[130px] flex flex-col items-center justify-center text-center">
                    Підтримка
                </h2>
                <h2 className="w-[130px] flex flex-col items-center justify-center text-center">
                    Контакти
                </h2>
            </div>
        </div>
    );
};
