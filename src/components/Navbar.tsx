"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navBackground = (isScrolled || !isHomePage) ? 'bg-white shadow-md py-3' : 'bg-transparent py-5';
    const textColor = (isScrolled || !isHomePage) ? 'text-gray-900' : 'text-white';
    const linkColor = (isScrolled || !isHomePage) ? 'text-gray-600' : 'text-white/90';

    // Create a dynamic wrapper for the logo that only shows on the transparent hero section
    const logoWrapper = (isScrolled || !isHomePage)
        ? ''
        : 'bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

                {/* Logo with Dynamic Wrapper */}
                <Link href="/" className={`text-xl md:text-2xl font-black tracking-tighter ${textColor} ${logoWrapper} transition-all duration-300`}>
                    RIGHTFUL <span className="text-blue-500">TOUR AND TRAVELS</span>
                </Link>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center gap-8 font-medium ${linkColor}`}>
                    <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
                    <Link href="/packages" className="hover:text-blue-500 transition-colors">Destinations</Link>
                    <Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors duration-300 shadow-lg shadow-blue-500/30">
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={`w-7 h-7 ${textColor}`} />
                    ) : (
                        <Menu className={`w-7 h-7 ${textColor}`} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 text-gray-800 font-medium border-t border-gray-100">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)}>Destinations</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}