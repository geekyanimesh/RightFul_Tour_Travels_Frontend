// src/components/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#154374] text-white pt-12 pb-6 border-t-[6px] border-[#f27405]">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Rightful Tour & Travels</h4>
                    <p className="text-white/80 mb-4 text-sm leading-relaxed">
                        Your trusted partner in creating unforgettable travel experiences, corporate events, and destination weddings around the globe.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white/80 hover:text-[#f27405] transition-colors">
                            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/80 hover:text-[#f27405] transition-colors">
                            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/80 hover:text-[#f27405] transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/80 hover:text-[#f27405] transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-4 text-[#f27405]">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
                        <li><Link href="/packages" className="hover:text-yellow-400 transition-colors">Tours & Packages</Link></li>
                        <li><Link href="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-4 text-[#f27405]">Support</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
                        <li><Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
                        <li><Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/cancellation" className="hover:text-yellow-400 transition-colors">Cancellation Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-4 text-[#f27405]">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-white/80">
                        <li className="flex items-start gap-3">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mt-1 text-[#f27405] shrink-0" />
                            <span>Rightful Tour and Travel Pvt. Ltd.<br />71 Canning Street, 5th Floor, Room No. B534<br />Kolkata, West Bengal</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-[#f27405] shrink-0" />
                            <div className="flex flex-col">
                                <span>+91 90621 71231</span>
                                <span>+91 70037 21581</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-[#f27405] shrink-0" />
                            <span>support@rightfultourandtravels.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-xs">
                <p>&copy; {new Date().getFullYear()} Rightful Tour & Travels Pvt. Ltd. All rights reserved.</p>
                <p>Built by <span className="font-semibold text-white">xlr8 Developers</span></p>
            </div>
        </footer>
    );
}