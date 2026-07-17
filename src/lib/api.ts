const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPackages() {
    try {
        const res = await fetch(`${API_URL}/packages/`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        return [];
    }
}

export async function fetchGallery() {
    try {
        const res = await fetch(`${API_URL}/gallery/`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        return [];
    }
}

export async function fetchTestimonials() {
    try {
        const res = await fetch(`${API_URL}/testimonials/`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        return [];
    }
}

export async function fetchAnnouncements() {
    try {
        const res = await fetch(`${API_URL}/announcements/`, { next: { revalidate: 0 } });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        return [];
    }
}