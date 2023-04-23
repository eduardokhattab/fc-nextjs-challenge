import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";

export async function GET(_request: NextRequest) {
    const chats = await prisma.chat.findMany({
        orderBy: {
            id: "desc",
        }
    });

    return NextResponse.json(chats);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const chatCreated = await prisma.chat.create({
        data: {
            message: body.message,
        },
        select: {
            id: true,
            message: true,
        }
    });

    return NextResponse.json(chatCreated);
}
