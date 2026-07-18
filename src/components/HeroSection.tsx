// src/components/Hero.tsx
"use client";

import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

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
                    <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md">
                        Your Journey Begins Here
                    </p>
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