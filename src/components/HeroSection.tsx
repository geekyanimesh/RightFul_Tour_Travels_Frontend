// src/components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="relative h-[85vh] md:h-screen w-full flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Travel Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto mt-16 md:mt-0">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
                    Discover Your Next <span className="text-blue-500">Adventure</span>
                </h1>
                <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto font-medium px-2">
                    Explore the world's most breathtaking destinations with our expertly curated travel packages.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/packages" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 md:py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/30">
                        Explore Packages
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3.5 md:py-4 rounded-full font-bold text-lg transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}