// src/components/PackageCard.tsx
import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Hotel, Car, Utensils, Binoculars } from 'lucide-react';

interface PackageProps {
  pkg: {
    id: number;
    title: string;
    location: string;
    duration_days: number;
    price: number;
    is_best_seller: boolean;
    image_url: string;
    is_active_flash_sale?: boolean;
    discounted_price?: number;
  };
}

export default function PackageCard({ pkg }: PackageProps) {
  return (
    <Link href={`/packages/${pkg.id}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full">

      {/* Image Header */}
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={pkg.image_url}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Floating Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {pkg.is_best_seller && (
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              Best Seller
            </span>
          )}
        </div>
        {/* Duration Pill overlapping image */}
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
          <Clock className="w-3.5 h-3.5" /> {pkg.duration_days} Days
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {pkg.location}
          </p>
          <h3 className="text-xl font-black text-[#154374] leading-tight mb-5 group-hover:text-[#f27405] transition-colors line-clamp-2">
            {pkg.title}
          </h3>

          {/* MMT Style Inclusions */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-600 mb-6">
            <div className="flex flex-col items-center gap-1.5">
              <div className="bg-blue-50 p-2 rounded-full"><Hotel className="w-4 h-4 text-blue-600" /></div>
              <span className="text-[10px] text-gray-500">Hotels</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="bg-blue-50 p-2 rounded-full"><Car className="w-4 h-4 text-blue-600" /></div>
              <span className="text-[10px] text-gray-500">Transfers</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="bg-blue-50 p-2 rounded-full"><Utensils className="w-4 h-4 text-blue-600" /></div>
              <span className="text-[10px] text-gray-500">Meals</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="bg-blue-50 p-2 rounded-full"><Binoculars className="w-4 h-4 text-blue-600" /></div>
              <span className="text-[10px] text-gray-500">Sightseeing</span>
            </div>
          </div>
        </div>

        {/* Price Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-end justify-between">
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Starting From</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-gray-900">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[10px] text-gray-400">per person</p>
          </div>
          <span className="bg-[#154374] text-white text-sm font-bold py-2.5 px-6 rounded-full group-hover:bg-[#0d2a4a] transition-colors shadow-md">
            View Details
          </span>
        </div>
      </div>

    </Link>
  );
}