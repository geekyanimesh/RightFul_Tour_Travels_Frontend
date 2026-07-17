// src/app/packages/page.tsx
import { fetchPackages } from "@/lib/api";
import Image from "next/image";

export default async function PackagesPage() {
    const packages = await fetchPackages();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Tour Packages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg: any) => (
                    <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        {pkg.image && (
                            <div className="relative h-48 w-full">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        )}
                        <div className="p-6 flex-grow flex flex-col">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h2>
                            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{pkg.description}</p>
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span className="text-gray-500">{pkg.duration}</span>
                                <span className="text-blue-600 text-lg">₹{pkg.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}