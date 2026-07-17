// components/PackageCard.tsx
import React from 'react';
import { MapPin, Star, Clock } from 'lucide-react';
import Link from 'next/link';

interface Package {
    id: number;
    title: string;
    location: string;
    duration_days: number;
    price: number;
    image_url?: string;
    rating?: number;
    is_best_seller?: boolean;
}

export default function PackageCard({ pkg }: { pkg: Package }) {
    return (
        <Link href={`/packages/${pkg.id}`} className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
                {pkg.is_best_seller && (
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                            Best Seller
                        </span>
                    </div>
                )}
                <img
                    src={pkg.image_url || "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop"}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {pkg.title}
                    </h3>
                    <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg shrink-0">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold text-gray-700">{pkg.rating || "4.9"}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration_days} Days</span>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Starting from</p>
                        <p className="text-2xl font-black text-gray-900">₹{pkg.price.toLocaleString('en-IN')}</p>
                    </div>
                    <button className="bg-gray-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors duration-300">
                        View Details
                    </button>
                </div>
            </div>
        </Link>
    );
}