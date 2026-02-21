import { getUsers } from '@/app/actions/user'
import Link from 'next/link'
import UserCard from '@/components/UserCard'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function UsersPage() {
    const result = await getUsers()

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h1>User Accounts</h1>
                    <p className="subtitle">Manage your registered users securely.</p>
                </div>
                <Link href="/users/new" className="btn btn-primary">
                    + Add User
                </Link>
            </div>

            {!result.success && (
                <div className="card" style={{ color: 'var(--error)', borderColor: 'var(--error)' }}>
                    {result.error}
                </div>
            )}

            {result.success && result.data && (
                <div className="user-list">
                    {result.data.length === 0 ? (
                        <div className="card" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 1rem' }}>
                            <p style={{ opacity: 0.5 }}>No users found. Create your first user!</p>
                        </div>
                    ) : (
                        result.data.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))
                    )}
                </div>
            )}
        </div>
    )
}
