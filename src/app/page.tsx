// src/app/page.tsx
import HeroSection from '../components/HeroSection';
import DestinationsGrid from '../components/DestinationsGrid';
import PackageCard from '../components/PackageCard';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const mockPackages = [
  { id: 1, title: "Romantic Paris Getaway", location: "Paris, France", duration_days: 7, price: 85000, is_best_seller: true, image_url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" },
  { id: 2, title: "Swiss Alps Adventure", location: "Zurich, Switzerland", duration_days: 5, price: 120000, is_best_seller: false, image_url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, title: "Bali Beach Retreat", location: "Bali, Indonesia", duration_days: 6, price: 45000, is_best_seller: true, image_url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar removed from here */}
      <HeroSection />
      <DestinationsGrid />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trending Packages</h2>
          <button className="hidden md:block text-blue-600 font-semibold hover:text-blue-700 transition-colors">View All &rarr;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>

      <Testimonials />
      <FAQ />
      {/* Footer removed from here */}
    </main>
  );
}