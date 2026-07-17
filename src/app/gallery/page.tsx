// src/app/gallery/page.tsx
import { fetchGallery } from "@/lib/api";
import Image from "next/image";

export default async function GalleryPage() {
    const gallery = await fetchGallery();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {gallery.map((item: any) => (
                    <div key={item.id} className="relative h-64 w-full rounded-lg overflow-hidden shadow-sm group">
                        {item.image && (
                            <Image
                                src={item.image}
                                alt={item.caption || "Gallery Image"}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                        )}
                        {item.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.caption}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}