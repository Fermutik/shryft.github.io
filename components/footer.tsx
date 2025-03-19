import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils";

export const Footer = ({ lang }: BasePageProps) => {
    const t = getT(lang, "footer");

    return (
        <div className="flex flex-col w-full mt-4 bg-black text-white">
            {/* Top header area with title */}
            <div className="flex h-[50px] text-sm lg:text-lg items-center justify-center">
                <h2 className="text-center">{t("title")}</h2>
            </div>

            {/* Three-column content area */}
            <div className="flex justify-center items-center w-full mx-auto px-4">
                {/* 
                <div className="hidden md:block w-1/5">
                    <img src="https://placehold.co/155x110/cccccc/ffffff?Image+Placeholder" alt="Placeholder" />
                </div>
                 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-32 text-gray-400">
                    {/* Column 1 */}
                    <div className="space-y-1">
                        <p><b>Малоформатна продукція</b></p>
                        <p>Презентації</p>
                        <p>Брошури</p>
                        <p>Архітектурні проекти</p>
                        <p>Наліпки та стікерпаки</p>
                        <p>Афіші</p>
                        <p>Дипломи та подяки</p>
                        <p>Каталоги</p>
                        <p>Бланки</p>
                        <p>Бейджі</p>
                        <p>Сертифікати</p>
                        <p>Листівки</p>
                        <p>Етикетки</p>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-1">
                        <p><b>Широкоформатна продукція</b></p>
                        <p>Креслення</p>
                        <p>Планшети</p>
                        <p>Друк на кальці</p>
                        <p>Плакати</p>
                        <p>Лекала</p>
                        <p>Друк на самоклейці</p>
                        <p>Друк на холсті</p>
                        <p>Друк на оракалі</p>
                        <p>Друк на банері</p>
                        <p>Банер Павук</p>
                        <p>Банер Ролл-ап</p>
                        <p>Фотошпалери</p>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-1">
                        <p><b>Послуги</b></p>
                        <p>Кольоровий друк</p>
                        <p>Чорно білий друк</p>
                        <p>Широкоформатний друк</p>
                        <p>Друк в аркушах</p>
                        <p>Ламінування</p>
                        <p>Тверда обкладинка</p>
                        <p>М’яка обкладинка</p>
                        <p>Цифровий банерний друк</p>
                        <p>Плотерна порізка</p>
                        <p>Офсетний друк</p>
                        <p>Післядрукарська обробка</p>
                        <p>Персоналізація</p>
                    </div>
                </div>
            </div>
        </div >
    );
};
