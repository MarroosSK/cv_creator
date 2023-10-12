import prisma from "@/lib/prismadb";
import { EducationTypes, JobExperienceTypes } from "@/types/types";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;
    const values = await req.json();
    const { userKnowledge, userLanguage, JobExperience, Education, ...rest } =
      values;
    console.log("Received data:", values);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.file.update({
      where: {
        id: id,
        userId,
      },
      data: {
        userKnowledge: { set: [] },
        userLanguage: { set: [] },
        JobExperience: { deleteMany: {} }, //delete all before create/update
        Education: { deleteMany: {} }, //delete all before create/update
      },
    });

    const course = await prisma.file.update({
      where: {
        id: id,
        userId,
      },
      data: {
        ...rest,
        userKnowledge: userKnowledge
          .map((know: string) => know)
          .filter(Boolean),
        userLanguage: userLanguage.map((lang: string) => lang).filter(Boolean),
        JobExperience: {
          create: JobExperience.map((exp: JobExperienceTypes) => ({
            yearsFrom: exp.yearsFrom,
            yearsTo: exp.yearsTo,
            position: exp.position,
            desc: exp.desc,
          })),
        },
        Education: {
          create: Education.map((edu: EducationTypes) => ({
            yearsFrom: edu.yearsFrom,
            yearsTo: edu.yearsTo,
            school: edu.school,
            desc: edu.desc,
          })),
        },
      },
      include: {
        Education: true,
        JobExperience: true,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userFiles = await prisma.file.delete({
      where: {
        id: params.id,
        userId,
      },
      include: {
        Education: true,
        JobExperience: true,
      },
    });
    console.log(userFiles);

    return NextResponse.json(userFiles, { status: 200 });
  } catch (error) {
    console.log("[RESUMES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
