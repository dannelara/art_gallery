import * as z from "zod"

export type Artist = {
    id: number // Temporarily added
    hero: string
    name: string
    details: {
        images: Artwork[] 
    }
    followers: number
    createdAt: Date
    monthlyUpload: number
}

export type Artwork = {
    id: number // Temporarily added
    src: string
    title: string
    description: string
    artist: number
    createdAt: Date
    views: number
    tags: string[]
}


export const registerFormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})