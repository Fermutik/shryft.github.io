"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UAPage from './ua/page';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Perform client-side redirect to '/ua'
        router.replace('/ua');
    }, [router]);

    return <UAPage />;
}