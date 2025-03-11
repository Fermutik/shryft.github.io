"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import i18nConfig from '../i18n.json';
import React, { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
    // Always call the hook to ensure the same order of hooks
    const pathname = usePathname();
    const { locales, defaultLocale } = i18nConfig;

    // State to track if the component has mounted on the client
    const [mounted, setMounted] = useState(false);

    // Set mounted to true when the component is mounted (client-side)
    useEffect(() => {
        setMounted(true);
    }, []);

    // If not mounted yet, render null (or fallback) while keeping hooks order intact
    if (!mounted) {
        return null;
    }

    // Split the pathname and determine the active locale
    const segments = pathname.split('/');
    const activeLocale = locales.find((loc) => segments[1] === loc) || defaultLocale;

    // Function to create a new path with the given locale
    const createLocalePath = (locale: string) => {
        const segments = pathname.split('/');
        const currentLocale = locales.find((loc) => segments[1] === loc);
        if (currentLocale) {
            segments[1] = locale;
        } else {
            segments.splice(1, 0, locale);
        }
        return segments.join('/');
    };

    return (
        <div className="flex items-center justify-center h-full text-2xl font-bold">
            {locales.map((locale, index) => (
                <React.Fragment key={locale}>
                    {index > 0 && ' | '}
                    <Link href={createLocalePath(locale)} passHref>
                        {/* Underline the current active locale */}
                        <span className={locale === activeLocale ? 'text-primary' : ''}>
                            {locale.toUpperCase()}
                        </span>
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
