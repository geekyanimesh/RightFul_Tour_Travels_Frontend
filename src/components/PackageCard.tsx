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
  };
}

export default function PackageCard({ pkg }: PackageProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col relative">
      {pkg.is_best_seller && (
        <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          Best Seller
        </span>
      )}
      <div className="h-56 overflow-hidden relative">
        <img
          src={pkg.image_url}
          alt={pkg.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          {pkg.location}
        </span>
        <h3 className="text-xl font-bold text-[#154374] mb-3">{pkg.title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-6 mt-auto">
          <span>{pkg.duration_days} Days</span>
          <span className="text-[#f27405] font-bold text-lg">
            ₹{pkg.price.toLocaleString('en-IN')}
          </span>
        </div>
        <Link 
          href={`/packages/${pkg.id}`} 
          className="inline-block bg-[#f27405] hover:bg-[#d96604] text-white px-6 py-2.5 rounded-md font-bold text-sm text-center transition-colors w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}