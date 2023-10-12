"use client";

import { ResumeContext, ResumeContextType } from "@/app/context/resume-context";
import React, { useContext } from "react";

const FormHobby = () => {
  const { userHobby, setUserHobby } = useContext(
    ResumeContext
  ) as ResumeContextType;

  return (
    <div className="p-6 w-full mt-2">
      <h2 className="text-indigo-500 font-semibold mb-2">HOBBY</h2>
      <p className="text-slate-500 text-[16px] leading-6 border p-2 rounded-lg">
        <textarea
          name="userHobby"
          value={userHobby}
          placeholder="Describe what you do in your free time."
          onChange={(e) => setUserHobby(e.target.value)}
          className="p-2 w-full"
        />
      </p>
    </div>
  );
};

export default FormHobby;
