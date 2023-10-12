import Dashboard from "@/components/dashboard";
import prisma from "@/lib/prismadb";
//suspense
import { Suspense } from "react";
import Loading from "./loading";

const fetchResumes = async () => {
  try {
    const resumesData = await prisma.file.findMany();

    if (resumesData) {
      return resumesData;
    }
  } catch (error) {
    console.error("[FETCH_ERROR]", error);
  }
};

const DashboardPage = async () => {
  const myResumes = await fetchResumes();
  console.log(myResumes);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Dashboard myResumes={myResumes} />
      </Suspense>
    </>
  );
};
export default DashboardPage;
