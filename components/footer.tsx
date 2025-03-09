import Image from "next/image";
import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils";

// Navbar component fixed at the top with the title on the left and the toggle on the right.
export const Footer = ({ t, lang }: BasePageProps) => {
    t = getT(lang, "footer");
    return (
        <div className="flex flex-col w-full">
            <div className="h-[50px] bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                <h2 className="text-center text-xl">{t("title")}</h2>
            </div>

            <div className="flex h-[225px] justify-between items-center">
                <div className="flex items-center space-x-4 ml-[210px]">
                    <div className="w-[270px]">
                        <img src="https://placehold.co/155x110/cccccc/ffffff?Image+Placeholder" alt="Placeholder" />
                    </div>
                    <div>
                        <img src="https://placehold.co/510x155/cccccc/ffffff?Image+Placeholder" alt="Placeholder" />
                    </div>

                </div>
            </div>
        </div>
    );
};
