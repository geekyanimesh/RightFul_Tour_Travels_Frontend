// components/DestinationsGrid.tsx
import React from 'react';

export default function DestinationsGrid() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Explore Destinations</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Large Feature Block */}
                <div className="md:col-span-2 relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=2070&auto=format&fit=crop"
                        alt="Europe"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">Explore Europe</h3>
                        <p className="text-white/80 font-medium">15+ Packages Available</p>
                    </div>
                </div>

                {/* Smaller Block */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop"
                        alt="Asia"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Discover Asia</h3>
                        <p className="text-white/80 font-medium">8 Packages Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
}