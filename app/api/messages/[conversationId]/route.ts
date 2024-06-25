import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { conversationId: string } }
) {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: params.conversationId,
      },
    });
    return NextResponse.json(messages);
  } catch (e) {
    console.log(e);
  }
}
