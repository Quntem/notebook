import { auth } from "@/lib/auth"
import {PrismaClient} from "@/generated/prisma"

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const session = await auth.api.getSession({
        headers: request.headers
    })
    if (!session) {
        return new Response("Unauthorized", { status: 401 })
    }
    const notebooks = await prisma.note.findMany({
        where: {
            ownerID: session.user.id
        }
    })
    return new Response(JSON.stringify(notebooks), { status: 200 })
}

export async function POST(request: Request) {
    const session = await auth.api.getSession({
        headers: request.headers
    })
    if (!session) {
        return new Response("Unauthorized", { status: 401 })
    }
    const body = await request.json()
    const notebook = await prisma.note.create({
        data: {
            title: body.title,
            ownerID: session.user.id,
            content: {
                
            }
        }
    })
    return new Response(JSON.stringify(notebook), { status: 200 })
}
