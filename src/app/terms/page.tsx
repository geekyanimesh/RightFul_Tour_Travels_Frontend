// src/app/terms/page.tsx
import React from 'react';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    <h1 className="text-4xl font-black text-[#154374] mb-8 border-b pb-4">Terms of Service</h1>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. User Agreement</h2>
                            <p>By using the Rightful Tour and Travels Pvt. Ltd. website and booking our services, you agree to comply with and be bound by the following terms and conditions.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Booking & Payments</h2>
                            <p>To confirm a booking, an advance payment as specified in your personalized quote is required. The remaining balance must be cleared prior to the commencement of the tour or event. We accept various modes of payment which will be detailed during the booking process.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Client Responsibilities</h2>
                            <p>Travelers are solely responsible for ensuring they possess valid identification, passports, visas, and any other travel documents required for their respective trips. Rightful Tour and Travels Pvt. Ltd. is not liable for disruptions caused by incomplete or invalid documentation.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Jurisdiction</h2>
                            <p>Any litigation or dispute arising out of or in connection with these services will be subject to the exclusive jurisdiction of the courts of Kolkata, West Bengal.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}