// src/components/Hero.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative w-full">
            {/* Hero Background */}
            <div className="relative h-[650px] md:h-[750px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                    alt="Tropical Beach Paradise"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-lg mb-2">
                        Discover the World
                    </h1>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
                        with <span className="text-white">Rightful Tours</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md mb-12">
                        Your Journey Begins Here
                    </p>

                    {/* Call to Action Button */}
                    <Link
                        href="/quote"
                        className="group flex items-center gap-3 bg-[#f27405] hover:bg-[#d96604] text-white px-10 py-5 rounded-full text-lg md:text-xl font-bold transition-all hover:scale-105 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(242,116,5,0.6)]"
                    >
                        Get Your Custom Quote
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}