// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import PreferencesSelector from './PreferencesSelector';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHomePage = pathname === '/';
    const navClass = isScrolled || !isHomePage ? 'bg-[#154374] shadow-lg py-4' : 'bg-transparent py-6';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

                {/* Updated Logo Section - Increased Size */}
                <Link href="/" className="flex items-center group">
                    <Image
                        src="/logo.png"
                        alt="Rightful Tour and Travel Logo"
                        width={260}
                        height={90}
                        priority
                        // Increased from h-12 to h-16 (mobile) and md:h-16 to md:h-24 (desktop)
                        className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-white/95 text-sm lg:text-base">
                    <Link href="/" className="hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-yellow-400 pb-1">Home</Link>
                    <Link href="/about" className="hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-yellow-400 pb-1">About Us</Link>
                    <Link href="/gallery" className="hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-yellow-400 pb-1">Gallery</Link>
                    <Link href="/packages" className="hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-yellow-400 pb-1">Tours & Packages</Link>
                    <Link href="/contact" className="hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-yellow-400 pb-1">Contact Us</Link>
                    <Link href="/quote" className="bg-[#f27405] hover:bg-[#d96604] text-white px-6 py-2.5 rounded-md font-bold transition-colors shadow-lg">
                        Get a Quote
                    </Link>
                    <PreferencesSelector />
                </div>

                {/* Mobile Navigation Controls */}
                <div className="md:hidden flex items-center gap-3">
                    <PreferencesSelector />
                    <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#154374] shadow-xl py-4 flex flex-col items-center gap-4 text-white font-medium border-t border-white/10">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                    <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)}>Tours & Packages</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                    <Link href="/quote" className="bg-[#f27405] px-6 py-2 rounded-md font-bold" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                </div>
            )}
        </nav>
    );
}