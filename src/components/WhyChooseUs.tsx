// components/WhyChooseUs.tsx
import React from 'react';
import { ShieldCheck, Tag, Headphones, PhoneCall } from 'lucide-react';

export default function WhyChooseUs() {
    return (
        <div className="relative mt-8">
            {/* Background shape mimicking clouds/waves */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
                <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side: Why Choose Us */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-[#154374] border-b-2 border-gray-200 pb-2 mb-10 w-max">
                        Why Choose Us?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="text-[#f27405] mb-3 bg-white p-4 rounded-full shadow-md border border-gray-50">
                                <ShieldCheck className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-[#154374]">Experienced Guides</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-[#f27405] mb-3 bg-white p-4 rounded-full shadow-md border border-gray-50">
                                <Tag className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-[#154374]">Affordable Prices</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-[#f27405] mb-3 bg-white p-4 rounded-full shadow-md border border-gray-50">
                                <Headphones className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-[#154374]">24/7 Customer Support</h3>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Card */}
                <div className="w-full lg:w-[400px] shrink-0 transform lg:translate-y-12">
                    <div className="bg-[#fcfaf4] rounded-2xl p-8 shadow-2xl border border-gray-200 text-center relative overflow-visible">
                        <h3 className="text-3xl font-black text-[#154374] mb-2">Contact Us Now!</h3>
                        <p className="text-gray-600 mb-8 font-medium">Plan Your Next Trip with Us!</p>

                        <button className="bg-[#308d46] hover:bg-[#257338] text-white px-10 py-3 rounded-full font-bold text-lg shadow-lg transition-colors mb-6">
                            Enquire Now
                        </button>

                        <div className="flex items-center justify-center gap-2 text-xl font-bold text-[#154374]">
                            <PhoneCall className="w-6 h-6 text-[#308d46]" />
                            <span>+91 98765 43210</span>
                        </div>

                        {/* Floating Phone Icon Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-[#308d46] p-4 rounded-full shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-transform">
                            <PhoneCall className="w-8 h-8 text-white fill-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}