// src/app/team/[id]/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Globe } from 'lucide-react';
import { notFound } from 'next/navigation';

const TEAM_DATA: Record<string, any> = {
    'ashish-bhalotia': {
        name: 'Ashish Kumar Bhalotia',
        role: 'Executive Director',
        image: 'https://ui-avatars.com/api/?name=Ashish+Kumar+Bhalotia&background=154374&color=fff&size=800&font-size=0.33',
        bio: 'Born in 1989 and based in Kolkata, Ashish Kumar Bhalotia is a dynamic professional with a strong background in the service industry. His career is distinguished by dedication, innovation, and a commitment to delivering excellence across diverse sectors. Alongside his corporate journey, Ashish has been actively associated with several NGOs and private limited companies, contributing meaningfully to social initiatives and organizational development. His engagement in community service reflects his belief in responsible leadership and inclusive growth. As Executive Director of Rightful Tour and Travels Pvt. Ltd., Ashish provides strategic direction, strengthens governance, and drives the company’s vision forward.',
        email: 'ashish@rightfultourandtravels.com',
        linkedin: '#'
    },
    'rahul-kejriwal': {
        name: 'Rahul Kumar Kejriwal',
        role: 'Non-Executive Director',
        image: '/rahul_kejriwal.jpeg',
        bio: 'Born in 1992, Rahul Kumar Kejriwal qualified as a Chartered Accountant in November 2018 and has since been practicing in Kolkata, India. With extensive expertise in accounting, taxation, and corporate compliance, he has established himself as a trusted professional delivering financial advisory services to businesses and individuals. In addition to his CA practice, Rahul serves as a Non-Executive Director at Rightful Tour and Travels Pvt. Ltd., where he contributes to the company’s strategic direction and governance. His role emphasizes oversight, financial discipline, and long-term vision, ensuring that the organization maintains transparency, accountability, and sustainable growth. Rahul’s dual expertise in finance and corporate governance positions him as a dynamic leader who combines professional integrity with entrepreneurial insight.',
        email: 'rahul@rightfultourandtravels.com',
        linkedin: '#'
    },
    'aditya-tibrewal': {
        name: 'Aditya Tibrewal',
        role: 'Executive Director',
        image: '/aditya_tibrewal.jpeg',
        bio: 'With a strong foundation in commerce and professional ethics, Aditya Tibrewal established Rightful Tour and Travel Pvt. Ltd. with a clear vision: to deliver travel experiences that are rightful, transparent, and exceptional. Holding a B.Com (Honours) and pursuing his CA Intermediate, he is committed to providing honest, well-planned, and memorable journeys across the globe while maintaining the highest standards of service and integrity. At Rightful, he ensures every trip is crafted with precision and care, prioritizing complete customer satisfaction and trust.',
        email: 'aditya@rightfultourandtravels.com',
        linkedin: '#'
    },
    'maruti-nandan-tibrewal': {
        name: 'Maruti Nandan Tibrewal',
        role: 'Consultant & Business Advisor',
        image: 'https://ui-avatars.com/api/?name=Maruti+Nandan+Tibrewal&background=f27405&color=fff&size=800&font-size=0.33',
        bio: 'Born in 1984 and based in Kolkata, Maruti Nandan Tibrewal serves as a trusted Consultant and Business Advisor at Rightful Tour and Travels Pvt. Ltd. He brings with him extensive expertise in corporate strategy, business development, and organizational growth. With a strong background in advisory roles, Maruti provides valuable guidance on operational efficiency, financial planning, and sustainable expansion. His insights help the company align its travel and event management services with evolving market demands while maintaining a focus on customer satisfaction and transparency. As a consultant, Maruti plays a key role in strengthening governance, identifying new opportunities, and supporting the leadership team in strategic decision-making. His contribution ensures that Rightful Tour and Travels continues to expand responsibly and deliver excellence across its diverse offerings.',
        email: 'maruti@rightfultourandtravels.com',
        linkedin: '#'
    }
};

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const member = TEAM_DATA[resolvedParams.id];

    if (!member) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <Link href="/about" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#f27405] mb-8 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to About Us
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-[400px] md:h-auto">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-10 md:p-12 flex flex-col justify-center">
                            <h1 className="text-4xl font-black text-[#154374] mb-2">{member.name}</h1>
                            <p className="text-[#f27405] text-xl font-bold mb-8">{member.role}</p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                {member.bio}
                            </p>

                            <div className="flex gap-4">
                                <a href={`mailto:${member.email}`} className="p-3 bg-blue-50 text-[#154374] rounded-full hover:bg-[#154374] hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 text-[#154374] rounded-full hover:bg-[#154374] hover:text-white transition-colors">
                                    <Globe className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}