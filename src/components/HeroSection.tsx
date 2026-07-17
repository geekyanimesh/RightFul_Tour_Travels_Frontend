// components/HeroSection.tsx
import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 w-full max-w-5xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Find Your Next Adventure
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-12 font-medium">
                    Discover extraordinary destinations, tailored packages, and unforgettable experiences.
                </p>

                <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto">
                    <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-200">
                        <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="w-full focus:outline-none text-gray-700 bg-transparent"
                        />
                    </div>
                    <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-200">
                        <Calendar className="text-gray-400 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            placeholder="Check-in - Check-out"
                            className="w-full focus:outline-none text-gray-700 bg-transparent"
                        />
                    </div>
                    <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}