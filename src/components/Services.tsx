// components/Services.tsx
import React from 'react';
import { Plane, Briefcase, FileText } from 'lucide-react';

export default function Services() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-[#f27405] mb-4 bg-orange-50 p-4 rounded-full">
                        <Plane className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-[#154374]">Flight Booking</h3>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-[#f27405] mb-4 bg-orange-50 p-4 rounded-full">
                        <Briefcase className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-[#154374]">Holiday Packages</h3>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-[#f27405] mb-4 bg-orange-50 p-4 rounded-full">
                        <FileText className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-[#154374]">Visa Assistance</h3>
                </div>
            </div>
        </div>
    );
}