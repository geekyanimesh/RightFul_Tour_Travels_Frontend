// components/FAQ.tsx
"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
    {
        question: "What is included in the tour packages?",
        answer: "Most packages include accommodation, daily breakfast, guided tours, and local transfers. Please check specific package details for flight inclusions."
    },
    {
        question: "Can I customize my travel itinerary?",
        answer: "Absolutely! We offer flexible itineraries. Contact our support team to tailor any package to your specific preferences."
    },
    {
        question: "What is the cancellation policy?",
        answer: "Cancellations made 30 days before departure receive a full refund. Cancellations within 14 days are subject to a 50% fee."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <div className="flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                            <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                            <FontAwesomeIcon
                                icon={openIndex === index ? faChevronUp : faChevronDown}
                                className="text-gray-500 w-5 h-5"
                            />
                        </div>
                        {openIndex === index && (
                            <div className="p-6 text-gray-600 border-t border-gray-200 bg-white">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}