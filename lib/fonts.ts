import localFont from 'next/font/local';

// Define local font using next/font/local
export const gilroy = localFont({
    src: [
        {
            path: '../public/fonts/gilroy/Gilroy-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/gilroy/Gilroy-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
    // Optional: set a CSS variable to use the font in your CSS
    variable: '--font-gilroy',
});