import { auth } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";
import prisma from "@/lib/prismadb";
import Resume from "@/components/resume";

const ResumePage = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth();

  if (!userId) redirect("/");

  const resumeById = await prisma.file.findUnique({
    where: {
      id: params.id,
      userId,
    },
    include: {
      JobExperience: true,
      Education: true,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="mx-auto w-full max-w-4xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            {/* Main area */}
            <Resume initialData={resumeById} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
