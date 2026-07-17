// src/app/packages/page.tsx
import React from 'react';
import PackageCard from '@/components/PackageCard'; // Adjust path if necessary

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
        <main className="min-h-screen bg-gray-50 pt-24 pb-16">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 mb-12 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Explore Our Packages</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find the perfect destination for your next adventure. From relaxing beach retreats to thrilling mountain expeditions.
                    </p>
                </div>
            </div>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockPackages.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>
        </main>
    );
}