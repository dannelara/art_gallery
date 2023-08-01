export type Artist = {
    id: number
    hero: string
    name: string
    details: {
        images: {
            src: string
            title: string
        }[]
    }
    followers: number
    createdAt: Date
    monthlyUpload: number
}