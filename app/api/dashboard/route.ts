import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: userId,
        userId,
      },
    });

    if (!findUser || !findUser.id) {
      await prisma.user.create({
        data: {
          id: userId,
          userId,
        },
      });
    }

    const userFiles = await prisma.user.findFirst({
      where: {
        id: userId,
        userId,
      },
      include: {
        file: true,
      },
    });
    console.log(userFiles);

    return NextResponse.json(userFiles, { status: 200 });
  } catch (error) {
    console.log("[RESUMES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
