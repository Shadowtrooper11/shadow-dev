import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShadowHex - Developer',
  description: 'Portfolio showcasing development projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-gray-300">
        {children}
      </body>
    </html>
  )
}