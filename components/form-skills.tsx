import { ResumeContext, ResumeContextType } from "@/app/context/resume-context";
import { Plus } from "lucide-react";
import React, { useContext, useState } from "react";
import { Button } from "./ui/button";

const FormSkills = () => {
  const [newKnowledge, setNewKnowledge] = useState(""); // saving new knowledge (1)
  const [newLanguage, setNewLanguage] = useState("");

  const resumeContext = useContext(ResumeContext) as ResumeContextType;

  const handleRemoveSkill = (index: number, type: string) => {
    if (type === "knowledge") {
      const updatedSkills = [...resumeContext?.userKnowledge];
      updatedSkills.splice(index, 1); // Remove the skill at index
      resumeContext?.setUserKnowledge(updatedSkills);
    } else if (type === "language") {
      const updatedLanguages = [...resumeContext?.userLanguage];
      updatedLanguages.splice(index, 1); // Remove the language at index
      resumeContext?.setUserLanguage(updatedLanguages);
    }
  };

  return (
    <>
      <div className="mb-2">
        <h2 className="text-indigo-500 font-semibold mb-2">KNOWLEDGE</h2>
        <ul className="p-6 rounded-lg flex flex-col gap-y-2 ">
          {!resumeContext?.userKnowledge ? (
            <p>No skills</p>
          ) : (
            resumeContext?.userKnowledge.map((know: string, index: number) => (
              <li
                key={index}
                className="text-slate-500 flex items-center border p-2 rounded-lg"
                onClick={() => {
                  // Set the skill to edit
                  setNewKnowledge(know);
                }}
              >
                {know}
                <button
                  onClick={() => handleRemoveSkill(index, "knowledge")}
                  className="ml-2 text-red-500"
                >
                  X
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="relative mt-3 w-full flex items-center justify-between border p-2 rounded-lg">
          <input
            name="knowledge"
            type="text"
            value={newKnowledge}
            placeholder="new skill"
            onChange={(e) => setNewKnowledge(e.target.value)}
            className="bg-transparent outline-none"
            required
          />
          <Button
            onClick={() => {
              if (
                newKnowledge &&
                !resumeContext?.userKnowledge.includes(newKnowledge)
              ) {
                resumeContext?.setUserKnowledge([
                  ...resumeContext?.userKnowledge,
                  newKnowledge,
                ]);
                setNewKnowledge(""); // Reset the input field after adding
              }
            }}
            className="absolute top-0 right-2 my-1 h-8"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* LANGUAGE */}
      <div className="mb-2">
        <h2 className="text-indigo-500 font-semibold mb-2">LANGUAGE</h2>
        <ul className="p-6 rounded-sm flex flex-col gap-y-2 ">
          {!resumeContext?.userLanguage ? (
            <p>No skills</p>
          ) : (
            resumeContext?.userLanguage.map((lang: string, index: number) => (
              <li
                key={index}
                className="text-slate-500 flex items-center border p-2 rounded-lg"
                onClick={() => {
                  // Set the language to edit
                  setNewLanguage(lang);
                }}
              >
                {lang}
                <button
                  onClick={() => handleRemoveSkill(index, "language")}
                  className="ml-2 text-red-500"
                >
                  X
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="relative mt-3 w-full flex items-center justify-between border p-2 rounded-lg">
          <input
            name="language"
            type="text"
            value={newLanguage}
            placeholder="new language"
            onChange={(e) => setNewLanguage(e.target.value)}
            className="bg-transparent outline-none"
            required
          />
          <Button
            onClick={() => {
              if (
                newLanguage &&
                !resumeContext?.userLanguage.includes(newLanguage)
              ) {
                resumeContext?.setUserLanguage([
                  ...resumeContext?.userLanguage,
                  newLanguage,
                ]);
                setNewLanguage(""); // Reset the input field after adding
              }
            }}
            className="absolute top-0 right-2 my-1 h-8"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormSkills;
