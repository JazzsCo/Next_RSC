'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'


export async function getUsers() {
    try {
        const users = await prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return { success: true, data: users }
    } catch (error) {
        console.error('getUsers error:', error)
        return { success: false, error: 'Failed to fetch users' }
    }
}

export async function getUserById(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        })
        return { success: true, data: user }
    } catch (error) {
        console.error('getUserById error:', error)
        return { success: false, error: 'Failed to fetch user' }
    }
}

export async function createUser(formData: FormData) {
    const email = formData.get('email') as string
    const name = formData.get('name') as string
    const bio = formData.get('bio') as string

    if (!email) {
        return { success: false, error: 'Email is required' }
    }

    try {
        const user = await prisma.user.create({
            data: { email, name, bio },
        })
        revalidatePath('/users')
        return { success: true, data: user }
    } catch (error: any) {
        console.error('createUser error:', error)
        if (error.code === 'P2002') {
            return { success: false, error: 'Email already exists' }
        }
        return { success: false, error: 'Failed to create user' }
    }
}

export async function updateUser(id: string, formData: FormData) {
    const email = formData.get('email') as string
    const name = formData.get('name') as string
    const bio = formData.get('bio') as string

    try {
        const user = await prisma.user.update({
            where: { id },
            data: { email, name, bio },
        })
        revalidatePath('/users')
        revalidatePath(`/users/${id}`)
        return { success: true, data: user }
    } catch (error) {
        console.error('updateUser error:', error)
        return { success: false, error: 'Failed to update user' }
    }
}

export async function deleteUser(id: string) {
    try {
        await prisma.user.delete({
            where: { id },
        })
        revalidatePath('/users')
        return { success: true }
    } catch (error) {
        console.error('deleteUser error:', error)
        return { success: false, error: 'Failed to delete user' }
    }
}
