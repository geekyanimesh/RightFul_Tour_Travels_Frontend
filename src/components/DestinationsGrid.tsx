// components/Destinations.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const destinations = [
    { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop" },
    { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" },
    { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop" },
    { name: "Switzerland", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop" }
];

export default function Destinations() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-end border-b-2 border-gray-200 pb-2 mb-8">
                <h2 className="text-3xl font-bold text-[#154374]">Popular Destinations</h2>
                <Link href="/destinations" className="text-[#f27405] font-semibold flex items-center hover:text-[#d96604]">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinations.map((dest, i) => (
                    <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="py-4 text-center">
                            <h3 className="text-xl font-bold text-[#154374]">{dest.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}