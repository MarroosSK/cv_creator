"use client";

import { useContext, useEffect, useState } from "react";
import ResumeEdit from "./resume-edit";
import ResumeView from "./resume-view";
import { Button } from "./ui/button";
import { ArrowLeft, Pencil } from "lucide-react";
import { ResumeContext, ResumeContextType } from "@/app/context/resume-context";

const Resume = ({ initialData }: { initialData: any }) => {
  const [isEditing, setIsEditing] = useState<Boolean>(false);

  const {
    setUserName,
    setUserTitle,
    setUserDateOfBirth,
    setUserEmail,
    setUserPhone,
    setUserAddress,
    setUserSocialPage,
    setUserSummary,
    setUserKnowledge,
    setUserLanguage,
    setJobExperience,
    setEducation,
    setUserHobby,
  } = useContext(ResumeContext) as ResumeContextType;

  console.log(initialData);

  const fillSetters = () => {
    setUserName(initialData.userName || "");
    setUserTitle(initialData.userTitle || "");
    setUserDateOfBirth(initialData.userDateOfBirth || "");
    setUserEmail(initialData.userEmail || "");
    setUserPhone(initialData.userPhone || "");
    setUserAddress(initialData.userAddress || "");
    setUserSocialPage(initialData.userSocialPage || "");
    setUserSummary(initialData.userSummary || "");
    setUserKnowledge(initialData.userKnowledge || []);
    setUserLanguage(initialData.userLanguage || []);
    setJobExperience(initialData.JobExperience);
    setEducation(initialData.Education);
    setUserHobby(initialData.userHobby || "");
  };

  useEffect(() => {
    fillSetters();
  }, []);

  return (
    <section>
      <Button onClick={() => setIsEditing(!isEditing)} className="mb-3">
        {isEditing ? (
          <div className="flex items-center gap-x-2">
            <ArrowLeft /> <p>back</p>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <Pencil /> <p>Edit</p>
          </div>
        )}
      </Button>
      {isEditing ? (
        <ResumeEdit initialData={initialData} setIsEditing={setIsEditing} />
      ) : (
        <ResumeView initialData={initialData} />
      )}
    </section>
  );
};

export default Resume;
