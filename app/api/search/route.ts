import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") as string;
  try {
    const data = await prisma.profile.findMany({
      where: {
        fullName: {
          contains: query,
          mode: "insensitive",
        },
        username: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
    return NextResponse.json({ data });
  } catch (e) {
    console.log(e);
  }
}
