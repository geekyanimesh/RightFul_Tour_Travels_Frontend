// src/components/ServiceBanner.tsx
import React from 'react';
import Link from 'next/link';
import {
    Plane,
    Building2,
    Home,
    Umbrella,
    Train,
    Bus,
    Car,
    Camera,
    FileText,
    ShieldCheck
} from 'lucide-react';

const services = [
    { name: 'Flights', icon: Plane, active: true, href: '/packages' },
    { name: 'Hotels', icon: Building2, active: false, href: '/packages' },
    { name: 'Homestays', icon: Home, active: false, href: '/packages' },
    { name: 'Holiday Packages', icon: Umbrella, active: false, href: '/packages' },
    { name: 'Trains', icon: Train, active: false, href: '/packages' },
    { name: 'Buses', icon: Bus, active: false, href: '/packages' },
    { name: 'Cabs', icon: Car, active: false, href: '/contact' },
    { name: 'Attractions', icon: Camera, active: false, href: '/packages' },
    { name: 'Visa', icon: FileText, active: false, href: '/contact' },
    { name: 'Insurance', icon: ShieldCheck, active: false, href: '/contact' },
];

export default function ServiceBanner() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-12 md:-mt-16">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="flex overflow-x-auto hide-scrollbar scroll-smooth">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className={`flex flex-col items-center justify-center flex-1 min-w-[85px] sm:min-w-[100px] py-4 px-2 cursor-pointer transition-colors hover:text-[#008cff] group ${service.active
                                        ? 'text-[#008cff] border-b-[3px] border-[#008cff]'
                                        : 'text-gray-600 border-b-[3px] border-transparent'
                                    }`}
                            >
                                <Icon
                                    className={`w-7 h-7 mb-2 transition-transform group-hover:-translate-y-1 ${service.active ? 'text-[#008cff]' : 'text-gray-600'
                                        }`}
                                    strokeWidth={1.5}
                                />
                                <span className="text-[11px] sm:text-xs font-bold text-center leading-tight whitespace-nowrap">
                                    {service.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}