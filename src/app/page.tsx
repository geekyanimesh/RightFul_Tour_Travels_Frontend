// src/app/page.tsx
import Link from "next/link";
import { fetchPackages } from "@/lib/api";
import Image from "next/image";

export default async function Home() {
  const packages = await fetchPackages();
  const featuredPackages = packages.slice(0, 3);

  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl mb-8">Experience the world with Rightful Tour & Travels.</p>
          <Link href="/packages" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            Explore Packages
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPackages.map((pkg: any) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              {pkg.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{pkg.description}</p>
                <Link href="/packages" className="text-blue-600 font-medium hover:underline mt-auto">
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}