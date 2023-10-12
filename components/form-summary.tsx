"use client";
import { ResumeContext, ResumeContextType } from "@/app/context/resume-context";
import React, { useContext } from "react";

const FormSummary = () => {
  const { userSummary, setUserSummary } = useContext(
    ResumeContext
  ) as ResumeContextType;

  return (
    <div className="p-6 flex flex-col">
      <h2 className="text-indigo-500 font-semibold mb-2">SUMMARY</h2>
      <p className="leading-6 text-[16px] text-slate-500 border p-2 rounded-lg">
        <textarea
          value={userSummary}
          placeholder="Something about yourself..."
          onChange={(e) => setUserSummary(e.target.value)}
          className="p-2 w-full"
        />
      </p>
    </div>
  );
};

export default FormSummary;
