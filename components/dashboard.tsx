"use client";

import React, { useState } from "react";
import UploadButton from "./upload-button";
import { Loader2, Scroll, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { resumeTypes } from "@/types/types";

const Dashboard = ({ myResumes }: { myResumes: any }) => {
  const router = useRouter();
  const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<
    string | null
  >(null);

  const handleDelete = async (id: string) => {
    setCurrentlyDeletingFile(id);
    const deletedFile = await axios.delete(`/api/resumes/${id}`);

    if (deletedFile) {
      toast.success("Deleted");
      setCurrentlyDeletingFile(null);
      router.refresh();
    } else {
      toast.error("Error occured");
    }
  };

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-slate-900">My Files</h1>
        <UploadButton />
      </div>

      <div>
        {myResumes && myResumes.length !== 0 ? (
          <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {myResumes.map((res: resumeTypes) => (
              <li
                key={res?.id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg "
              >
                <div className="px-6 mt-4 flex items-center justify-between py-2 gap-6 text-xs text-zinc-500">
                  <Link href={`/dashboard/${res?.id}`} className="w-3/4">
                    <h3 className="truncate text-lg font-medium text-slate-900">
                      {res?.name}.pdf
                    </h3>
                  </Link>
                  <Button
                    onClick={() => handleDelete(res?.id)}
                    size="sm"
                    className="w-1/4"
                    variant="destructive"
                  >
                    {currentlyDeletingFile === res?.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-[220px] flex flex-col items-center gap-2">
            <Scroll className="h-8 w-8 text-slate-800" />
            <h3 className="font-semibold text-xl">
              No resumes, start building
            </h3>
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
