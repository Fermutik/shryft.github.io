import { ModeToggle } from "@/components/mode-toogle";
import SvgLogo from "@/components/logo";
import Link from "next/link";

// Navbar component fixed at the top with the title on the left and the toggle on the right.
export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 p-1 flex justify-between items-center z-50 border-b bg-background">
            <Link href={"/"} className="h-fit w-fit">
                <SvgLogo className="w-[100[px]] h-[50px]" />
            </Link>
            <div className="mr-4">
                <ModeToggle />
            </div>
        </div >
    );
};
