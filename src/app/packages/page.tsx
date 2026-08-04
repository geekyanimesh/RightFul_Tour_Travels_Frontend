// src/app/packages/page.tsx
import React from 'react';
import PackageCard from '@/components/PackageCard';

// Popular Indian tour packages inspired by MakeMyTrip and ixigo
const mockPackages = [
    {
        id: 1,
        title: "Super Saver Goa Holiday",
        location: "Goa, India",
        duration_days: 4,
        price: 10682,
        is_best_seller: true,
        image_url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Amazing Kashmir Vacay with Gulmarg & Sonmarg",
        location: "Kashmir, India",
        duration_days: 7,
        price: 43092,
        is_best_seller: true,
        image_url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Epic Kerala - Backwaters & Hills",
        location: "Kerala, India",
        duration_days: 5,
        price: 24834,
        is_best_seller: false,
        image_url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Extravagant Manali & Solang Getaway",
        location: "Himachal Pradesh, India",
        duration_days: 5,
        price: 47758,
        is_best_seller: true,
        image_url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Sacred Chardham Yatra Experience",
        location: "Uttarakhand, India",
        duration_days: 12,
        price: 143306,
        is_best_seller: false,
        image_url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Panoramic Ladakh to Srinagar Expedition",
        location: "Ladakh & Kashmir, India",
        duration_days: 9,
        price: 103230,
        is_best_seller: false,
        image_url: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-[#f4f7fa] pt-20 pb-16">
            {/* Hero Header */}
            <div className="bg-[#154374] mb-12 py-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover w-full h-full"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight drop-shadow-md">
                        Indian Holiday Packages
                    </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto font-medium">
                        Handpicked domestic destinations across India. Enjoy exclusive deals, comfortable stays, and unforgettable memories.
                    </p>
                </div>
            </div>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {mockPackages.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>
        </main>
    );
}