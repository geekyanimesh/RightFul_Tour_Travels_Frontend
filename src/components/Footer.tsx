// components/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Rightful Tour & Travels</h4>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        Your trusted partner in creating unforgettable travel experiences and adventures around the globe.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/packages" className="hover:text-white transition-colors">Destinations</Link></li>
                        <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/cancellation" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-start gap-3">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                            <span>Rightful Tour and Travel Pvt. Ltd.<br />71 Canning Street, 5th Floor, Room No. B534<br />Kolkata, West Bengal</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-blue-500 shrink-0" />
                            <span>70037 21581</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-blue-500 shrink-0" />
                            <span>support@rightfultourandtravels.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} Rightful Tour & Travels. All rights reserved.</p>
                <p>Built by <span className="font-semibold text-white">xlr8 Developers</span></p>
            </div>
        </footer>
    );
}