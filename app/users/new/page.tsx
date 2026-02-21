import UserForm from '@/components/UserForm'
import Link from 'next/link'

export default function NewUserPage() {
    return (
        <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Link href="/users" style={{ display: 'inline-block', marginBottom: '1rem', opacity: 0.6 }}>
                ← Back to Users
            </Link>
            <h1>Create New User</h1>
            <p className="subtitle">Add a new account to the system.</p>

            <div className="card">
                <UserForm />
            </div>
        </div>
    )
}
