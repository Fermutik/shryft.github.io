// components/LanguageSwitcher.tsx
"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import i18nConfig from '../i18n.json';
import React from 'react';

const LanguageSwitcher = () => {
    const pathname = usePathname();
    const { locales, defaultLocale } = i18nConfig;

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
        <div>
            {locales.map((locale, index) => (
                <React.Fragment key={locale}>
                    {index > 0 && ' | '}
                    <Link href={createLocalePath(locale)} passHref>
                        {locale.toUpperCase()}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
};

export default LanguageSwitcher;