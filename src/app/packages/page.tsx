// src/app/packages/page.tsx
import React from 'react';
import PackageCard from '@/components/PackageCard';

// Using the same mock data for now until we connect the Django backend
const mockPackages = [
    { id: 1, title: "Romantic Paris Getaway", location: "Paris, France", duration_days: 7, price: 85000, is_best_seller: true, image_url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" },
    { id: 2, title: "Swiss Alps Adventure", location: "Zurich, Switzerland", duration_days: 5, price: 120000, is_best_seller: false, image_url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, title: "Bali Beach Retreat", location: "Bali, Indonesia", duration_days: 6, price: 45000, is_best_seller: true, image_url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop" },
    { id: 4, title: "Tokyo City Explorer", location: "Tokyo, Japan", duration_days: 8, price: 110000, is_best_seller: false, image_url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop" },
    { id: 5, title: "Dubai Luxury Desert", location: "Dubai, UAE", duration_days: 4, price: 65000, is_best_seller: true, image_url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, title: "Kerala Backwaters", location: "Kerala, India", duration_days: 5, price: 35000, is_best_seller: false, image_url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop" },
];

export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-[#f4f7fa] pt-20 pb-16">
            {/* MakeMyTrip Style Hero Header */}
            <div className="bg-[#154374] mb-12 py-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover w-full h-full"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight drop-shadow-md">Holiday Packages</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto font-medium">
                        Handpicked destinations for your next adventure. Enjoy exclusive deals, comfortable stays, and unforgettable memories.
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