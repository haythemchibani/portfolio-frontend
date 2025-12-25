// src/app/layout.tsx

import "./globals.css"

// This component wraps the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
