// src/app/gallery/page.tsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

// Safely loading images from Flickr API to bypass any Unsplash network blocks
const galleryImages = [
    // 1. Hindu Destination Wedding
    "https://loremflickr.com/800/600/hindu,wedding?lock=1",

    // 2. Kirtan / Pooja Event (Floral/Puja vibes)
    "https://loremflickr.com/800/600/puja,flowers?lock=2",


    // 4. Pilgrimage Tour (Indian Temple)
    "https://loremflickr.com/800/600/temple,india?lock=4",

    // 5. Switzerland (International Tour Package)
    "https://loremflickr.com/800/600/switzerland,alps?lock=5",

    // 6. Wedding Mandap / Event Management
    "https://loremflickr.com/800/600/indian,bride?lock=6",

    // 7. Dubai (Cityscape / Corporate Travel)
    "https://loremflickr.com/800/600/dubai,skyline?lock=7",

    // 8. Corporate Travel / Group Event
    "https://loremflickr.com/800/600/business,conference?lock=8",

    // 9. Paris (Romantic / European Tours)
    "https://loremflickr.com/800/600/paris,eiffel?lock=9",

    // 3. Maldives (Relaxing Holiday Package)
   // "https://loremflickr.com/800/600/maldives,ocean?lock=3",
];

// Sample testimonials based on the services provided
const testimonials = [
    {
        name: "Priya & Rahul",
        type: "Destination Wedding",
        text: "Rightful Tour and Travels made our destination wedding in Goa absolutely magical. From managing the guests' travel to the beautiful floral arrangements for the mandap, everything was seamless.",
        rating: 5
    },
    {
        name: "Amit Sharma",
        type: "Corporate Trip",
        text: "We booked an offsite for 50 employees to Dubai. The coordination was flawless, and the team ensured our corporate meetings and desert safaris went without a hitch. Highly recommended!",
        rating: 5
    },
    {
        name: "The Das Family",
        type: "Holiday Package",
        text: "Our family trip to Switzerland was a dream come true. The itinerary was perfectly paced, and the transparent pricing meant there were no hidden surprises. Truly a memorable experience.",
        rating: 5
    },
    {
        name: "Meera Chatterjee",
        type: "Pilgrimage Tour",
        text: "I booked a pilgrimage trip for my elderly parents. The team took such good care of them, providing comfortable transport and great guides. I am so grateful for their personalized service.",
        rating: 4
    },
    {
        name: "Rohan Gupta",
        type: "Custom Travel",
        text: "From flight bookings to visa assistance, the team at Rightful handled everything for my Europe backpacking trip. Their 24/7 support gave me complete peace of mind.",
        rating: 5
    },
    {
        name: "Sanya & Dev",
        type: "Kirtan Event",
        text: "We hosted a large Kirtan gathering and entrusted the event management to Rightful. The decor, crowd management, and catering were handled beautifully. It felt deeply spiritual and stress-free.",
        rating: 5
    }
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#fdfbf6] pt-20">

            {/* Hero Section */}
            <div className="w-full h-[35vh] relative">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                    alt="Gallery Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#154374]/80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        Our Memories & Moments
                    </h1>
                    <p className="text-lg text-white/90 font-medium max-w-2xl">
                        A glimpse into the beautiful journeys, weddings, and events we've had the honor of organizing.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* Gallery Collage Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#154374] mb-4">Photo Gallery</h2>
                        <div className="w-24 h-1 bg-[#f27405] mx-auto rounded-full"></div>
                    </div>

                    {/* Masonry Layout using CSS columns */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-[#154374]/0 group-hover:bg-[#154374]/20 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#154374] mb-4">What Our Clients Say</h2>
                        <div className="w-24 h-1 bg-[#f27405] mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Read the experiences of our happy travelers and clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 relative">
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100" />

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-gray-200 text-gray-200" />
                                    ))}
                                </div>

                                <p className="text-gray-700 italic mb-6 relative z-10 line-clamp-4">
                                    "{testimonial.text}"
                                </p>

                                <div className="mt-auto border-t border-gray-100 pt-4">
                                    <h4 className="font-bold text-[#154374] text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-[#f27405] font-medium">{testimonial.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}