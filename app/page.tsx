"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side component for redirecting based on language cookie.
 * If the "language" cookie is not set, it defaults to "ua".
 */
export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Parse document.cookie to get the cookies as a key-value object
        const cookieObj = document.cookie.split("; ").reduce((acc, cookieStr) => {
            const [key, value] = cookieStr.split("=");
            acc[key] = value;
            return acc;
        }, {} as Record<string, string>);

        // Read the language cookie; default to "ua" if not set
        const lang = cookieObj["language"] || "ua";

        // Perform client-side redirect to the path based on the language value
        router.replace(`/${lang}`);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <svg
                className="animate-spin -ml-1 mr-3 h-16 w-16 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        </div>
    );

}
