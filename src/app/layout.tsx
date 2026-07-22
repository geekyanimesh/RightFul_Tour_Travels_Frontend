// src/app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleTranslate from '@/components/GoogleTranslate'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <GoogleTranslate />
        {children}
        <Footer />
      </body>
    </html>
  )
}