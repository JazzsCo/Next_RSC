import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <h1>Premium User Management</h1>
      <p className="subtitle">Secure, fast, and server-first. No client-side JSON leaks.</p>

      <div className="card" style={{ maxWidth: '600px', marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Sweetmoria Pattern Implementation</h2>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', opacity: 0.8 }}>
          <li>All data fetching occurs in React Server Components.</li>
          <li>Mutations use Next.js Server Actions.</li>
          <li>Zero client-side <code>fetch()</code> or <code>axios</code> calls to API routes.</li>
          <li>Network traffic consists of HTML and React Flight streams (<code>_rsc</code>).</li>
          <li>Local PostgreSQL with Prisma ORM.</li>
        </ul>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/users" className="btn btn-primary">
            View Users
          </Link>
        </div>
      </div>
    </div>
  )
}
