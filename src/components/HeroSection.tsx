// src/components/Hero.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SLIDE_IMAGES = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop", // Tropical Beach (Default)
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", // Event / Wedding Setup
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop", // Mountains / Manali
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"  // Tour Group / Fun
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Change slide every 5 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === SLIDE_IMAGES.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="relative w-full">
            {/* Hero Background */}
            <div className="relative h-[650px] md:h-[750px] w-full overflow-hidden bg-black">

                {/* Image Slider */}
                {SLIDE_IMAGES.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                            }`}
                    />
                ))}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-10"></div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20 z-20">
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