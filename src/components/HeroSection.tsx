// components/Hero.tsx
"use client";

import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative w-full">
            {/* Hero Background */}
            <div className="relative h-[650px] md:h-[750px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop"
                    alt="World Travel"
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
                    <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md">
                        Your Journey Begins Here
                    </p>
                </div>

                {/* Curved Wave Bottom Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                    <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[#fdfbf6]"></path>
                    </svg>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-16 md:-mt-24">
                <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
                    <div className="flex-1 flex items-center justify-between px-4 py-4 md:py-5 border-b md:border-b-0 md:border-r border-gray-200 text-gray-500 cursor-pointer hover:bg-gray-50">
                        <span className="text-sm font-medium">Destination</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="flex-1 flex items-center justify-between px-4 py-4 md:py-5 border-b md:border-b-0 md:border-r border-gray-200 text-gray-500 cursor-pointer hover:bg-gray-50">
                        <span className="text-sm font-medium">Tour Type</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="flex-1 flex items-center justify-between px-4 py-4 md:py-5 border-b md:border-b-0 md:border-r border-gray-200 text-gray-500 cursor-pointer hover:bg-gray-50">
                        <span className="text-sm font-medium">Travel Date</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="flex-1 flex items-center justify-between px-4 py-4 md:py-5 border-b md:border-b-0 md:border-r border-gray-200 text-gray-500 cursor-pointer hover:bg-gray-50">
                        <span className="text-sm font-medium">Tour Date</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <button className="bg-[#f27405] hover:bg-[#d96604] text-white px-8 py-4 md:py-0 font-bold flex items-center justify-center gap-2 transition-colors flex-shrink-0 text-lg md:text-base">
                        Search <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}