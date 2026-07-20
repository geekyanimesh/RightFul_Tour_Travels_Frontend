// src/app/faq/page.tsx
import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8 border-b pb-4">
                        <HelpCircle className="w-10 h-10 text-[#f27405]" />
                        <h1 className="text-4xl font-black text-[#154374]">Frequently Asked Questions</h1>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-blue-50/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">How do I book a customized tour?</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">You can request a custom quote by navigating to our "Request a Quote" page. Fill out the form with your destination, tentative dates, and requirements, and our team will get back to you with a personalized itinerary.</p>
                        </div>

                        <div className="bg-blue-50/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">What is included in a standard package?</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">Inclusions and exclusions vary by trip. Detailed information regarding accommodations, meals, transport, and sightseeing is explicitly listed on each specific package page.</p>
                        </div>

                        <div className="bg-blue-50/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Can you handle large destination weddings?</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">Yes! We specialize in comprehensive destination wedding event management. We handle end-to-end logistics, from guest travel and accommodation to the main event execution.</p>
                        </div>

                        <div className="bg-blue-50/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">How can I contact support during my trip?</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">Our clients are provided with a dedicated 24/7 support phone number and email address before their trip begins to ensure immediate assistance whenever required.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}