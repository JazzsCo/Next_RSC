import Link from 'next/link'
import { deleteUser } from '@/app/actions/user'

interface User {
    id: string
    name: string | null
    email: string
    bio: string | null
    createdAt: Date
}

export default function UserCard({ user }: { user: User }) {
    // We use form with server action for deletion to avoid client-side fetch
    async function handleSubmit() {
        'use server'
        await deleteUser(user.id)
    }

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{user.name || 'Anonymous'}</h3>
                <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>
                    {new Date(user.createdAt).toLocaleDateString()}
                </span>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.5rem' }}>{user.email}</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.5', minHeight: '3em' }}>
                {user.bio || 'No biography provided.'}
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <Link href={`/users/${user.id}`} className="btn btn-secondary" style={{ flex: 1 }}>
                    Edit
                </Link>
                <form action={handleSubmit} style={{ flex: 1 }}>
                    <button type="submit" className="btn btn-danger" style={{ width: '100%' }}>
                        Delete
                    </button>
                </form>
            </div>
        </div>
    )
}
