// components/Testimonials.tsx
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
    { name: "Rahul S.", text: "The Europe package was incredibly well organized. We didn't have to worry about a single detail.", rating: 5 },
    { name: "Priya M.", text: "Amazing customer support and beautiful hotels. Rightful Travels made our honeymoon perfect.", rating: 5 },
    { name: "Amit K.", text: "Great value for money. The local guides were knowledgeable and very friendly.", rating: 4 }
];

export default function Testimonials() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What Our Travelers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                            <p className="font-bold text-gray-900">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}