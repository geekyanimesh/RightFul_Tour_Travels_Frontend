// src/lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPackages() {
    const res = await fetch(`${API_URL}/packages/`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch packages');
    return res.json();
}

export async function fetchGallery() {
    const res = await fetch(`${API_URL}/gallery/`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch gallery');
    return res.json();
}

export async function fetchTestimonials() {
    const res = await fetch(`${API_URL}/testimonials/`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch testimonials');
    return res.json();
}

export async function fetchAnnouncements() {
    const res = await fetch(`${API_URL}/announcements/`, { next: { revalidate: 0 } });
    if (!res.ok) throw new Error('Failed to fetch announcements');
    return res.json();
}