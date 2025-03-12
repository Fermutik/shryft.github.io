"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Perform client-side redirect to '/ua'
        router.replace('/ua');
    }, [router]);

    return null;
}