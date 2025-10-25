'use client';

import Link from 'next/link';
import { Banknote, Fuel } from 'lucide-react'; // Optional: use your icons

export default function BottomNav() {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-2 mx-auto text-center font-medium">
                <Link href="/budget" className="flex items-center justify-center">
                    <Banknote className="w-6 h-6 text-blue-600" />
                </Link>
                <Link href="/fuel" className="flex items-center justify-center">
                    <Fuel className="w-6 h-6 text-green-600" />
                </Link>
            </div>
        </div>
    );
}
