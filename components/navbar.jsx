import { ModeToggle } from "@/components/mode-toogle";

// Navbar component fixed at the top with the title on the left and the toggle on the right.
export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 p-1 flex justify-between items-center border-b bg-white dark:bg-gray-900 z-50">
            <h1 className="ml-4">shryft.com</h1>
            <div className="mr-4">
                <ModeToggle />
            </div>
        </div>
    );
};
