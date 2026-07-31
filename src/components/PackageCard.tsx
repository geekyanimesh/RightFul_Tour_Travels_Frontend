import React from 'react';
import Link from 'next/link';

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
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row mb-6 relative">

      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <img
          src={pkg.image_url}
          alt={pkg.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-0 flex flex-col gap-2">
          {pkg.is_best_seller && (
            <span className="bg-[#154374] text-white text-xs font-bold px-4 py-1.5 rounded-r-full shadow-md tracking-wider">
              BEST SELLER
            </span>
          )}
          {pkg.is_active_flash_sale && (
            <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-r-full shadow-md tracking-wider">
              FLASH SALE
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between w-full md:w-3/5">
        <div>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">
            {pkg.location} • {pkg.duration_days} Days
          </span>
          <h3 className="text-2xl font-bold text-[#154374] leading-tight mt-1">{pkg.title}</h3>

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
            <span className="bg-blue-50 text-[#154374] px-3 py-1.5 rounded-md border border-blue-100 flex items-center gap-1">
              🏨 Hotels
            </span>
            <span className="bg-blue-50 text-[#154374] px-3 py-1.5 rounded-md border border-blue-100 flex items-center gap-1">
              🚗 Transfers
            </span>
            <span className="bg-blue-50 text-[#154374] px-3 py-1.5 rounded-md border border-blue-100 flex items-center gap-1">
              🍽️ Meals
            </span>
            <span className="bg-blue-50 text-[#154374] px-3 py-1.5 rounded-md border border-blue-100 flex items-center gap-1">
              👁️ Sightseeing
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-gray-100 pt-4">
          <div className="mb-4 sm:mb-0">
            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">Starting from:</p>
            {pkg.is_active_flash_sale && pkg.discounted_price ? (
              <div className="flex items-center gap-3">
                <span className="text-lg text-gray-400 line-through decoration-red-500/50">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </span>
                <span className="text-3xl font-black text-[#f27405]">
                  ₹{pkg.discounted_price.toLocaleString('en-IN')}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-black text-[#f27405]">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
            )}
            <p className="text-xs text-gray-500 mt-1">per person</p>
          </div>

          <Link
            href={`/packages/${pkg.id}`}
            className="w-full sm:w-auto text-center bg-[#f27405] hover:bg-[#d96604] text-white font-bold py-3 px-8 rounded-md shadow-md transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}