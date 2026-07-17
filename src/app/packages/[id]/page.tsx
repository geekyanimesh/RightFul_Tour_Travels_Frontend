// src/app/packages/[id]/page.tsx
import React from 'react';
import { MapPin, Clock, Star, Check } from 'lucide-react';

// Mock data fetcher
const getPackage = (id: string) => ({
    id,
    title: "Romantic Paris Getaway",
    location: "Paris, France",
    duration_days: 7,
    price: 85000,
    rating: 4.9,
    image_url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop",
    description: "Experience the magic of Paris with this exclusive 7-day romantic getaway. Enjoy private tours of the Louvre, sunset cruises on the Seine, and dinner at the Eiffel Tower.",
    includes: ["5-Star Accommodation", "Daily Breakfast", "Airport Transfers", "Guided City Tour", "Seine River Cruise"]
});

// 1. Update the typing to specify that params is a Promise
export default async function PackageDetails({ params }: { params: Promise<{ id: string }> }) {
    // 2. Await the params before accessing the ID
    const resolvedParams = await params;
    const pkg = getPackage(resolvedParams.id);

    return (
        <main className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Image */}
            <div className="w-full h-[50vh] relative">
                <img src={pkg.image_url} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{pkg.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-white/90">
                        <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> {pkg.location}</div>
                        <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> {pkg.duration_days} Days</div>
                        <div className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> {pkg.rating} Rating</div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{pkg.description}</p>
                    </section>
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pkg.includes.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700">
                                    <div className="bg-blue-100 p-1 rounded-full"><Check className="w-4 h-4 text-blue-600" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Booking Card */}
                <div className="relative">
                    <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <p className="text-gray-500 uppercase tracking-wider text-sm font-semibold mb-2">Total Price</p>
                        <p className="text-4xl font-black text-gray-900 mb-6">₹{pkg.price.toLocaleString('en-IN')}</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-500/30 mb-4">
                            Book This Tour
                        </button>
                        <p className="text-center text-gray-500 text-sm">Need help? Call 70037 21581</p>
                    </div>
                </div>
            </div>
        </main>
    );
}