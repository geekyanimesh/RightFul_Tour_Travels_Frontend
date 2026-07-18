// src/app/quote/page.tsx
"use client";

import React, { useState } from 'react';
import { PlaneTakeoff, Map, Calendar, Users, Send } from 'lucide-react';

export default function QuotePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Custom Holiday Package',
        destination: '',
        travelDate: '',
        duration: '',
        adults: '2',
        children: '0',
        budget: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In the future, this will connect to your Django API
        console.log("Quote Request Submitted:", formData);
        alert("Thank you! Your request has been received. Our team will contact you shortly with a personalized quote.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="min-h-screen bg-[#fdfbf6] pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-[#154374] mb-4">Request a Custom Quote</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Planning a trip or an event? Tell us your requirements, and our experts will craft the perfect itinerary and pricing for you.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-[#154374] px-8 py-6 text-white flex items-center gap-3">
                        <PlaneTakeoff className="w-6 h-6 text-[#f27405]" />
                        <h2 className="text-2xl font-bold">Your Details</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">

                        {/* Section 1: Contact Info */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">1. Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input required type="text" name="name" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input required type="email" name="email" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input required type="tel" name="phone" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" placeholder="+91 98765 43210" />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Trip Details */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">2. Trip / Event Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">What are you looking for?</label>
                                    <select name="serviceType" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all bg-white">
                                        <option value="Custom Holiday Package">Custom Holiday Package</option>
                                        <option value="Corporate Travel Solutions">Corporate Travel Solutions</option>
                                        <option value="Pilgrimage Trips">Pilgrimage Trips</option>
                                        <option value="Destination Wedding">Destination Wedding Event Management</option>
                                        <option value="Kirtan Weddings & Small Events">Kirtan Weddings & Small Events</option>
                                        <option value="Flight Booking">Flight Booking Only</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Destination / Venue</label>
                                    <div className="relative">
                                        <Map className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                                        <input type="text" name="destination" onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" placeholder="e.g. Maldives, Kolkata, Switzerland" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tentative Date</label>
                                    <div className="relative">
                                        <Calendar className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                                        <input type="date" name="travelDate" onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Days)</label>
                                    <input type="number" name="duration" onChange={handleChange} min="1" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" placeholder="e.g. 5" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Est. Budget (₹)</label>
                                    <input type="text" name="budget" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" placeholder="Optional" />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Passengers */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">3. Number of People / Guests</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Adults (12+ yrs)</label>
                                    <div className="relative">
                                        <Users className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                                        <input type="number" name="adults" onChange={handleChange} min="1" defaultValue="2" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Children (0-11 yrs)</label>
                                    <input type="number" name="children" onChange={handleChange} min="0" defaultValue="0" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Extra Details */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">4. Additional Requirements</h3>
                            <textarea name="message" onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#f27405] outline-none transition-all" placeholder="Any special requests, hotel preferences, or details regarding events/weddings?"></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[#f27405] hover:bg-[#d96604] text-white font-bold rounded-lg transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 text-lg">
                                <Send className="w-5 h-5" />
                                Submit Request
                            </button>
                            <p className="text-sm text-gray-500 mt-4">
                                * We value your privacy. Your details are secure and will only be used to contact you regarding your inquiry.
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    );
}