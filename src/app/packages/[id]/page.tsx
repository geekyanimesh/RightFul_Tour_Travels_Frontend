// src/app/packages/[id]/page.tsx
import React from 'react';
import { MapPin, Clock, Star, Check, Hotel, Car, Utensils, Binoculars } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Expanded Mock data fetcher matching the Indian packages
const getPackage = (id: string) => {
    const packages = {
        '1': { title: "Super Saver Goa Holiday", location: "Goa, India", duration_days: 4, price: 10682, rating: 4.5, image_url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop", description: "Experience the sun-kissed beaches and vibrant nightlife of Goa. This curated package offers a perfect blend of relaxation and adventure, allowing you to explore the rich heritage of Old Goa and the thrilling water sports of North Goa.", includes: ["3-Star Hotel", "Daily Breakfast", "Airport Transfers", "North Goa Sightseeing"] },
        '2': { title: "Amazing Kashmir Vacay with Gulmarg & Sonmarg", location: "Kashmir, India", duration_days: 7, price: 43092, rating: 4.8, image_url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop", description: "Discover the breathtaking beauty of 'Paradise on Earth'. Explore the serene Dal Lake, the snow-capped peaks of Gulmarg, and the golden meadows of Sonmarg. Perfect for families and honeymooners alike.", includes: ["Houseboat Stay", "Shikara Ride", "Daily Breakfast & Dinner", "All Transfers"] },
        '3': { title: "Epic Kerala - Backwaters & Hills", location: "Kerala, India", duration_days: 5, price: 24834, rating: 4.7, image_url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop", description: "Immerse yourself in God's Own Country. From the misty tea gardens of Munnar to the tranquil backwaters of Alleppey, this trip is pure bliss. Experience the local culture and aromatic spice plantations.", includes: ["Houseboat Cruise", "Munnar Sightseeing", "All Meals on Houseboat", "Airport Transfers"] },
        '4': { title: "Extravagant Manali & Solang Getaway", location: "Himachal Pradesh, India", duration_days: 5, price: 47758, rating: 4.6, image_url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop", description: "Escape to the majestic Himalayas. Enjoy the cool breeze, lush valleys, and adventurous activities at Solang Valley. Stroll through the Mall Road and visit ancient temples.", includes: ["4-Star Hotel", "Daily Breakfast & Dinner", "Solang Valley Tour", "Private Cab"] },
        '5': { title: "Sacred Chardham Yatra Experience", location: "Uttarakhand, India", duration_days: 12, price: 143306, rating: 4.9, image_url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1974&auto=format&fit=crop", description: "Embark on a spiritual journey of a lifetime to Yamunotri, Gangotri, Kedarnath, and Badrinath. We provide comprehensive assistance and comfortable stays to ensure your pilgrimage is peaceful and smooth.", includes: ["Premium Accommodation", "All Meals", "Helicopter Tickets (Optional)", "Guided VIP Darshan"] },
        '6': { title: "Panoramic Ladakh to Srinagar Expedition", location: "Ladakh & Kashmir, India", duration_days: 9, price: 103230, rating: 4.8, image_url: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2070&auto=format&fit=crop", description: "A thrilling road trip across the top of the world. Drive through high-altitude passes, camp by the mesmerizing Pangong Lake, and descend into the beautiful Kashmir valley.", includes: ["Camping at Pangong", "Royal Enfield (Optional)", "Oxygen Cylinders", "Permits & Fees"] },
    };
    return packages[id as keyof typeof packages] || null;
};

// 1. Update the typing to specify that params is a Promise
export default async function PackageDetails({ params }: { params: Promise<{ id: string }> }) {
    // 2. Await the params before accessing the ID
    const resolvedParams = await params;
    const pkg = getPackage(resolvedParams.id);

    // 3. Handle 404 if package doesn't exist
    if (!pkg) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f4f7fa] pt-20">
            {/* Hero Image */}
            <div className="w-full h-[50vh] min-h-[400px] relative">
                <img src={pkg.image_url} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">{pkg.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-white font-medium">
                        <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-[#f27405]" /> {pkg.location}</div>
                        <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#f27405]" /> {pkg.duration_days} Days</div>
                        <div className="flex items-center gap-1.5"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> {pkg.rating} Rating</div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-10">

                    {/* MakeMyTrip Style Inclusion Icons */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-[#154374] mb-6 border-b border-gray-100 pb-4">Trip Inclusions</h2>
                        <div className="flex flex-wrap items-center gap-8 md:gap-12">
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-blue-50 p-4 rounded-full"><Hotel className="w-6 h-6 text-[#154374]" /></div>
                                <span className="text-sm font-semibold text-gray-700">Hotels</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-blue-50 p-4 rounded-full"><Car className="w-6 h-6 text-[#154374]" /></div>
                                <span className="text-sm font-semibold text-gray-700">Transfers</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-blue-50 p-4 rounded-full"><Utensils className="w-6 h-6 text-[#154374]" /></div>
                                <span className="text-sm font-semibold text-gray-700">Meals</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-blue-50 p-4 rounded-full"><Binoculars className="w-6 h-6 text-[#154374]" /></div>
                                <span className="text-sm font-semibold text-gray-700">Sightseeing</span>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#154374] mb-4">Overview</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{pkg.description}</p>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#154374] mb-6">Detailed Inclusions</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pkg.includes.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    <div className="bg-green-100 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Booking Card */}
                <div className="relative">
                    <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                        <p className="text-gray-500 uppercase tracking-wider text-xs font-bold mb-1">Starting Price</p>
                        <div className="flex items-baseline gap-1 mb-6">
                            <p className="text-4xl font-black text-[#f27405]">₹{pkg.price.toLocaleString('en-IN')}</p>
                            <span className="text-sm text-gray-500 font-medium">/ person</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Base Price</span>
                                <span className="font-semibold text-gray-900">₹{pkg.price.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Taxes & Fees</span>
                                <span className="font-semibold text-green-600">Included</span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="flex items-center justify-center w-full bg-[#154374] hover:bg-[#0d2a4a] text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg mb-4"
                        >
                            Get A Quote
                        </Link>
                        <p className="text-center text-gray-500 text-sm font-medium">Need help? Call <a href="tel:+917003721581" className="text-[#154374] hover:underline">70037 21581</a></p>
                    </div>
                </div>
            </div>
        </main>
    );
}