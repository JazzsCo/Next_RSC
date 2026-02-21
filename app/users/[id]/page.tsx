import { getUserById } from '@/app/actions/user'
import UserForm from '@/components/UserForm'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const result = await getUserById(id)

    if (!result.success || !result.data) {
        notFound()
    }

    return (
        <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Link href="/users" style={{ display: 'inline-block', marginBottom: '1rem', opacity: 0.6 }}>
                ← Back to Users
            </Link>
            <h1>Edit User</h1>
            <p className="subtitle">Update account details for {result.data.name || result.data.email}.</p>

            <div className="card">
                <UserForm user={result.data} />
            </div>
        </div>
    )
}
