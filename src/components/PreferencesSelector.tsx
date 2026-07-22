// components/PreferencesSelector.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const REGIONS = [
    { code: 'IN', name: 'India', flag: '🇮🇳', langCode: 'hi', langName: 'Hindi' },
    { code: 'US', name: 'USA', flag: '🇺🇸', langCode: 'en', langName: 'English' },
    { code: 'GB', name: 'UK', flag: '🇬🇧', langCode: 'en', langName: 'English' },
    { code: 'AE', name: 'UAE', flag: '🇦🇪', langCode: 'ar', langName: 'Arabic' },
    { code: 'FR', name: 'France', flag: '🇫🇷', langCode: 'fr', langName: 'French' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪', langCode: 'de', langName: 'German' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸', langCode: 'es', langName: 'Spanish' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵', langCode: 'ja', langName: 'Japanese' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹', langCode: 'it', langName: 'Italian' },
    { code: 'CN', name: 'China', flag: '🇨🇳', langCode: 'zh-CN', langName: 'Chinese' },
    { code: 'RU', name: 'Russia', flag: '🇷🇺', langCode: 'ru', langName: 'Russian' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷', langCode: 'pt', langName: 'Portuguese' },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷', langCode: 'ko', langName: 'Korean' },
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', langCode: 'ar', langName: 'Arabic' },
    { code: 'TR', name: 'Turkey', flag: '🇹🇷', langCode: 'tr', langName: 'Turkish' },
];

export default function PreferencesSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);

    useEffect(() => {
        const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
        if (match && match[2]) {
            const currentLangCode = match[2].split('/')[2];
            const activeRegion = REGIONS.find(r => r.langCode === currentLangCode);
            if (activeRegion) setSelectedRegion(activeRegion);
        }
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleRegionSelect = (region: typeof REGIONS[0]) => {
        setSelectedRegion(region);

        const cookieValue = `/auto/${region.langCode}`;
        document.cookie = `googtrans=${cookieValue}; path=/;`;
        document.cookie = `googtrans=${cookieValue}; domain=.${window.location.hostname}; path=/;`;

        setIsOpen(false);
        window.location.reload();
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-[#2a2a2a] text-white rounded hover:bg-[#3a3a3a] transition-colors border border-gray-700/50 text-sm font-medium"
            >
                <span className="text-base leading-none mr-1">{selectedRegion.flag}</span>
                <span>{selectedRegion.name}</span>
                <span className="text-gray-400">|</span>
                <span>{selectedRegion.langName}</span>
                <ChevronDown className={`w-4 h-4 ml-1 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-[280px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
                    <div className="p-3 bg-gray-100 border-b border-gray-200 flex items-center gap-2 text-gray-800">
                        <Globe className="w-4 h-4 text-gray-600" />
                        <h3 className="font-bold text-sm">Select Country</h3>
                    </div>

                    <div className="p-2 max-h-[320px] overflow-y-auto custom-scrollbar">
                        <div className="flex flex-col gap-1">
                            {REGIONS.map((r) => (
                                <button
                                    key={r.code}
                                    onClick={() => handleRegionSelect(r)}
                                    className={`flex items-center justify-between p-2.5 rounded text-sm transition-colors ${selectedRegion.code === r.code
                                            ? 'bg-blue-50 text-blue-700 font-semibold'
                                            : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">{r.flag}</span>
                                        <span>{r.name}</span>
                                    </div>
                                    <span className={`text-xs ${selectedRegion.code === r.code ? 'text-blue-500' : 'text-gray-400'}`}>
                                        {r.langName}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}