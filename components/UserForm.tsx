'use client'

import { createUser, updateUser } from '@/app/actions/user'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
    id: string
    name: string | null
    email: string
    bio: string | null
}

export default function UserForm({ user }: { user?: User }) {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(formData: FormData) {
        setLoading(true)
        setError(null)

        const result = user
            ? await updateUser(user.id, formData)
            : await createUser(formData)

        setLoading(false)

        if (result.success) {
            router.push('/users')
        } else {
            setError(result.error || 'Something went wrong')
        }
    }

    return (
        <form action={handleSubmit}>
            {error && (
                <div style={{ color: 'var(--error)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    {error}
                </div>
            )}

            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                    name="name"
                    defaultValue={user?.name || ''}
                    className="form-input"
                    placeholder="John Doe"
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                    name="email"
                    type="email"
                    defaultValue={user?.email || ''}
                    className="form-input"
                    placeholder="john@example.com"
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label">Biography</label>
                <textarea
                    name="bio"
                    defaultValue={user?.bio || ''}
                    className="form-textarea"
                    placeholder="Tell us about yourself..."
                />
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    style={{ flex: 1 }}
                >
                    {loading ? 'Processing...' : user ? 'Update Account' : 'Create Account'}
                </button>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="btn btn-secondary"
                    style={{ flex: 1 }}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}
