// src/app/cancellation/page.tsx
import React from 'react';

export default function CancellationPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    <h1 className="text-4xl font-black text-[#154374] mb-8 border-b pb-4">Cancellation & Refund Policy</h1>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Standard Cancellation Timeline</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>30+ Days Prior:</strong> Full refund minus standard administrative and processing fees.</li>
                                <li><strong>15 to 30 Days Prior:</strong> 50% refund of the total booking amount.</li>
                                <li><strong>Less than 7 Days Prior:</strong> No refund will be issued.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Third-Party Bookings</h2>
                            <p>Please note that flight tickets, train tickets, and specific hotel bookings are strictly subject to the cancellation and refund policies of the respective airlines, railways, or properties. Rightful Tour and Travels Pvt. Ltd. has no control over these specific third-party retention charges.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Force Majeure</h2>
                            <p>No refunds will be provided for cancellations caused by events beyond our control, including but not limited to natural disasters, political instability, strikes, or unavoidable weather conditions.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}