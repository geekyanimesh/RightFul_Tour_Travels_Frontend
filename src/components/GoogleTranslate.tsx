"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleTranslate() {
    useEffect(() => {
        // Expose the init function to the global window object
        (window as any).googleTranslateElementInit = () => {
            new (window as any).google.translate.TranslateElement(
                {
                    pageLanguage: 'en', // Your site's default language
                    autoDisplay: false,
                },
                'google_translate_element'
            );
        };
    }, []);

    return (
        <>
            {/* Hidden element required by Google Translate */}
            <div id="google_translate_element" className="hidden"></div>

            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
            />

            {/* CSS to completely hide Google's default UI and top banner */}
            <style jsx global>{`
                .goog-te-banner-frame {
                    display: none !important;
                }
                body {
                    top: 0 !important;
                }
                .goog-tooltip {
                    display: none !important;
                }
                .goog-tooltip:hover {
                    display: none !important;
                }
                .goog-text-highlight {
                    background-color: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                }
                #goog-gt-tt {
                    display: none !important;
                }
            `}</style>
        </>
    );
}