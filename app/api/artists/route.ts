import { NextResponse } from "next/server"
import { artists } from "../../../mockData"

const GET = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return NextResponse.json(artists)
}

export { GET }