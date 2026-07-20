// src/app/about/page.tsx
import React from 'react';
import { Map, Heart, Users, CalendarHeart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TEAM_MEMBERS = [
    {
        id: 'ashish-bhalotia',
        name: 'Ashish Kumar Bhalotia',
        role: 'Executive Director',
        image: 'https://ui-avatars.com/api/?name=Ashish+Kumar+Bhalotia&background=154374&color=fff&size=512&font-size=0.33'
    },
    {
        id: 'rahul-kejriwal',
        name: 'Rahul Kumar Kejriwal',
        role: 'Non-Executive Director',
        image: '/rahul_kejriwal.jpeg'
    },
    {
        id: 'aditya-tibrewal',
        name: 'Aditya Tibrewal',
        role: 'Executive Director',
        image: '/aditya_tibrewal.jpeg'
    },
    {
        id: 'maruti-nandan-tibrewal',
        name: 'Maruti Nandan Tibrewal',
        role: 'Consultant and Business Advisor',
        image: 'https://ui-avatars.com/api/?name=Maruti+Nandan+Tibrewal&background=f27405&color=fff&size=512&font-size=0.33'
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <div className="w-full h-[40vh] relative">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="About Rightful Tour and Travels"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#154374]/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        About Our Company
                    </h1>
                    <p className="text-xl text-white/90 font-medium max-w-2xl">
                        Making travel seamless and celebrations memorable.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#154374] border-b-2 border-gray-200 pb-2 inline-block">
                            Company Profile
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            <strong className="text-gray-900">Rightful Tour and Travels Pvt. Ltd.</strong> is a professionally managed travel and event management company based in Kolkata, India. At Rightful, we believe that every journey should be more than just travel — it should be an experience filled with comfort, discovery, and unforgettable memories.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Established with the vision of making travel seamless and celebrations memorable, our mission is to deliver transparent pricing, reliable service, and personalized experiences that bring people closer to places, cultures, and each other.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-[#f27405] p-6 rounded-r-lg mt-8">
                            <h3 className="text-xl font-bold text-[#154374] mb-2">Our Mission</h3>
                            <p className="text-gray-700 font-medium">
                                "To deliver transparent pricing, reliable service, and personalized experiences that bring people closer to places, cultures, and each other."
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" alt="Travel" className="rounded-xl shadow-md h-48 md:h-64 w-full object-cover transform translate-y-8" />
                        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Events" className="rounded-xl shadow-md h-48 md:h-64 w-full object-cover" />
                    </div>
                </div>

                {/* Team Carousel Section */}
                <div className="mt-20 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#154374] mb-4">Meet Our Team</h2>
                        <p className="text-gray-600">The passionate people behind Rightful Tour and Travels.</p>
                    </div>
                    {/* CSS-based horizontal scroll carousel */}
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
                        {TEAM_MEMBERS.map((member) => (
                            <Link
                                href={`/team/${member.id}`}
                                key={member.id}
                                className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all snap-center group"
                            >
                                <div className="h-72 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <span className="text-white flex items-center gap-2 font-medium">
                                            View Profile <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-[#f27405] font-medium mt-1">{member.role}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Our Expertise Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-[#154374] mb-12">Our Areas of Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Travel Solutions */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
                            <div className="mx-auto w-16 h-16 bg-blue-50 text-[#154374] rounded-full flex items-center justify-center mb-6">
                                <Map className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Tours</h3>
                            <p className="text-gray-600">
                                Specializing in domestic and international tours, customized holiday packages, and spiritual pilgrimage trips tailored to your needs.
                            </p>
                        </div>

                        {/* Corporate Travel */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
                            <div className="mx-auto w-16 h-16 bg-blue-50 text-[#154374] rounded-full flex items-center justify-center mb-6">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Travel</h3>
                            <p className="text-gray-600">
                                End-to-end corporate travel solutions designed for seamless business trips, offsites, and professional group travel.
                            </p>
                        </div>

                        {/* Destination Weddings */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
                            <div className="mx-auto w-16 h-16 bg-orange-50 text-[#f27405] rounded-full flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Destination Weddings</h3>
                            <p className="text-gray-600">
                                Comprehensive destination wedding event management in Kolkata, ensuring your special day is executed with perfection and grandeur.
                            </p>
                        </div>

                        {/* Special Events */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
                            <div className="mx-auto w-16 h-16 bg-orange-50 text-[#f27405] rounded-full flex items-center justify-center mb-6">
                                <CalendarHeart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Events & Kirtans</h3>
                            <p className="text-gray-600">
                                Expert planning for niche gatherings, including traditional Kirtan weddings and intimately curated small events and celebrations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}