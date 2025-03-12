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

    return null;
}
