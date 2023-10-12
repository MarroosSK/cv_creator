"use client";

import { ResumeContext, ResumeContextType } from "@/app/context/resume-context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import FormHeading from "./form-heading";
import FormSummary from "./form-summary";
import FormSkills from "./form-skills";
import FormExperience from "./form-experience";
import FormHobby from "./form-hobby";

const ResumeEdit = ({
  initialData,
  setIsEditing,
}: {
  initialData: any;
  setIsEditing: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const router = useRouter();
  //add to one later
  const [currentlyUpdatingFile, setCurrentlyUpdatingFile] = useState(null);
  const [loader, setLoader] = useState(false);

  const {
    userName,
    userTitle,
    userDateOfBirth,
    userPhone,
    userEmail,
    userAddress,
    userSocialPage,
    userSummary,
    userKnowledge,
    userLanguage,
    JobExperience,
    Education,
    userHobby,
  } = useContext(ResumeContext) as ResumeContextType;

  const handlePatch = async (id: string) => {
    const values = {
      userName,
      userTitle,
      userDateOfBirth,
      userPhone,
      userEmail,
      userAddress,
      userSocialPage,
      userKnowledge,
      userLanguage,
      userSummary,
      JobExperience: JobExperience,
      Education: Education,
      userHobby,
    };
    console.log(values);

    setCurrentlyUpdatingFile(initialData.id);
    const uploadedFile = await axios.patch(`/api/resumes/${id}`, values);

    if (uploadedFile) {
      toast.success("Updated");
      setCurrentlyUpdatingFile(null);
      setIsEditing(false);
      router.refresh();
    } else {
      toast.error("Error occurred");
    }
  };
  return (
    <section>
      <div className="actual-resume border bg-white rounded-md p-4">
        {/* HEADING */}
        <FormHeading />
        {/* SUMMARY */}
        <FormSummary />

        {/* SKILLS */}
        <div className="p-6 flex gap-x-10 mt-2">
          {/* KNOWLEDGE + LANGUAGE */}
          <div className="w-1/3">
            <FormSkills />
          </div>
          {/* EDUCATION + WORK EXPERIENCE */}
          <div className="w-2/3">
            <FormExperience />
          </div>
        </div>
        {/* HOBBY */}
        <FormHobby />
      </div>

      {/* DOWNLOAD */}
      <div className="mt-7 text-center">
        <Button
          variant="default"
          onClick={() => handlePatch(initialData.id)}
          disabled={!(loader === false)}
          size="lg"
        >
          {loader ? <span>Downloading</span> : <span>Save</span>}
        </Button>
      </div>
    </section>
  );
};

export default ResumeEdit;
