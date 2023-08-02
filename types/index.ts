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