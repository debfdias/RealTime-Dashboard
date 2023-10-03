import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name:true,
        email:true,
        createdAt: true
      }
    })

    return NextResponse.json(users)
  } catch (err) {
    console.log(err)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

