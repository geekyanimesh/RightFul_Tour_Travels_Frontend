// src/app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleTranslate from '@/components/GoogleTranslate'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
        <Navbar />
        <GoogleTranslate />
        {children}
        <Footer />

        {/* Replace G-XYZ with your client's actual Measurement ID */}
        <GoogleAnalytics gaId="G-VQJ7Q2H4MP" />
      </body>
    </html>
  )
}
