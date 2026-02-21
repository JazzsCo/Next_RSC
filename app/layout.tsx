import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NextRSC | User Management',
  description: 'Secure user account management with the Sweetmoria pattern.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="nav-logo">
            NextRSC
          </Link>
          <div className="nav-links">
            <Link href="/users" className="nav-link">
              Users
            </Link>
            <Link href="/users/new" className="nav-link">
              + New User
            </Link>
          </div>
        </nav>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
