// src/app/page.tsx
import HeroSection from '../components/HeroSection';
import DestinationsGrid from '../components/DestinationsGrid';
import PackageCard from '../components/PackageCard';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Link from 'next/link';

const mockPackages = [
  { id: 1, title: "Romantic Paris Getaway", location: "Paris, France", duration_days: 7, price: 85000, is_best_seller: true, image_url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" },
  { id: 2, title: "Swiss Alps Adventure", location: "Zurich, Switzerland", duration_days: 5, price: 120000, is_best_seller: false, image_url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, title: "Bali Beach Retreat", location: "Bali, Indonesia", duration_days: 6, price: 45000, is_best_seller: true, image_url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <DestinationsGrid />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Trending Packages</h2>
          <Link href="/packages" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mockPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>

      <Testimonials />
      <FAQ />
    </main>
  );
}