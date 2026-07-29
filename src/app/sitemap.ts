import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://rightfultourandtravels.com'

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/packages/`)
    const packagesData = await res.json()

    const packages = Array.isArray(packagesData) ? packagesData : packagesData.results || []

    const packageRoutes = packages.map((pkg: any) => ({
        url: `${baseUrl}/packages/${pkg.id}`,
        lastModified: new Date(),
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/packages`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
        },
        ...packageRoutes,
    ]
}