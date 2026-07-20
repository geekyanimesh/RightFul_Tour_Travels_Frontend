// src/app/privacy/page.tsx
import React from 'react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    <h1 className="text-4xl font-black text-[#154374] mb-8 border-b pb-4">Privacy Policy</h1>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Data Collection</h2>
                            <p>We collect only the essential personal information required to process your bookings and provide our services effectively. This typically includes your name, phone number, email address, physical address, and necessary ID proofs.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Data Sharing & Third Parties</h2>
                            <p>We respect your privacy and do not sell your personal data. We only share required details with trusted third-party service providers, such as airlines, hotels, and transport operators, strictly to facilitate your travel or event arrangements.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Data Security</h2>
                            <p>We implement standard digital security measures to protect the personal information you submit via our website against unauthorized access, alteration, disclosure, or destruction.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}