import {  NextResponse } from "next/server"
import { artists } from "../../../mockData"

const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (id) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const artist = artists.find((artist) => artist.id === Number(id))
        if (artist) {
            return NextResponse.json(artist, { status: 200 })
        }
    }

    //TODO: return 404
    return new Response()
}

export { GET }