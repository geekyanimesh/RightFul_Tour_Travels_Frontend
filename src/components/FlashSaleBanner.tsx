// src/components/FlashSaleBanner.tsx
"use client";
import React, { useState, useEffect } from 'react';

export default function FlashSaleBanner({ endDate }: { endDate: string }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(endDate).getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
                setIsExpired(true);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    if (!isMounted || isExpired) return null;

    return (
        <div className="bg-gradient-to-r from-red-600 to-red-500 w-full py-2.5 px-4 flex justify-center items-center shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 relative z-10">
                <span className="text-white font-extrabold text-sm md:text-base tracking-wide flex items-center gap-2 uppercase">
                    <span className="animate-bounce">⚡</span> Flash Sale Is Live!
                </span>

                <div className="flex items-center gap-1.5 text-red-600 font-bold text-xs md:text-sm">
                    <div className="bg-white px-2.5 py-1 rounded-md shadow-sm min-w-[36px] text-center">
                        {timeLeft.days.toString().padStart(2, '0')}
                        <span className="text-[10px] block text-gray-500 -mt-1 font-normal">Days</span>
                    </div>
                    <span className="text-white font-bold text-lg mb-3">:</span>
                    <div className="bg-white px-2.5 py-1 rounded-md shadow-sm min-w-[36px] text-center">
                        {timeLeft.hours.toString().padStart(2, '0')}
                        <span className="text-[10px] block text-gray-500 -mt-1 font-normal">Hrs</span>
                    </div>
                    <span className="text-white font-bold text-lg mb-3">:</span>
                    <div className="bg-white px-2.5 py-1 rounded-md shadow-sm min-w-[36px] text-center">
                        {timeLeft.minutes.toString().padStart(2, '0')}
                        <span className="text-[10px] block text-gray-500 -mt-1 font-normal">Min</span>
                    </div>
                    <span className="text-white font-bold text-lg mb-3">:</span>
                    <div className="bg-white px-2.5 py-1 rounded-md shadow-sm min-w-[36px] text-center">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                        <span className="text-[10px] block text-gray-500 -mt-1 font-normal">Sec</span>
                    </div>
                </div>
            </div>
        </div>
    );
}