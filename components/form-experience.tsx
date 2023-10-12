import { ResumeContext, ResumeContextType } from "@/app/context/resume-context";
import { PlusCircle, X } from "lucide-react";
import React, { useContext } from "react";
import { Button } from "./ui/button";

const FormExperience = () => {
  const { JobExperience, setJobExperience, Education, setEducation } =
    useContext(ResumeContext) as ResumeContextType;

  const handleJobExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedJobExperience = [...JobExperience];
    updatedJobExperience[index][
      field as keyof (typeof updatedJobExperience)[0]
    ] = value;
    setJobExperience(updatedJobExperience);
  };

  const handleEducationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedEducation = [...Education];
    updatedEducation[index][field as keyof (typeof updatedEducation)[0]] =
      value;
    setEducation(updatedEducation);
  };

  return (
    <>
      <div className="mb-4">
        <h2 className="text-indigo-500 font-semibold mb-2">JOB EXPERIENCE</h2>
        <div className="w-full mb-4">
          {JobExperience &&
            JobExperience.map((job, index) => (
              <div key={index} className="flex flex-col gap-y-3">
                <p className="text-slate-500">
                  <input
                    id={`jobExpYearsFrom${index}`}
                    type="text"
                    value={job.yearsFrom}
                    placeholder="Type year FROM"
                    onChange={(e) =>
                      handleJobExperienceChange(
                        index,
                        "yearsFrom",
                        e.target.value
                      )
                    }
                    className="bg-transparent outline-none border-b-2"
                    required
                  />
                </p>
                <p className="text-slate-500">
                  <input
                    id={`jobExpYearsTo${index}`}
                    type="text"
                    value={job.yearsTo}
                    placeholder="Type year TO"
                    onChange={(e) =>
                      handleJobExperienceChange(
                        index,
                        "yearsTo",
                        e.target.value
                      )
                    }
                    className="bg-transparent outline-none border-b-2"
                    required
                  />
                </p>
                <h2 className="text-slate-500 font-semibold text-[22px] border p-2 rounded-lg">
                  <input
                    id={`jobExpPosition${index}`}
                    type="text"
                    value={job.position}
                    placeholder="Position"
                    onChange={(e) =>
                      handleJobExperienceChange(
                        index,
                        "position",
                        e.target.value
                      )
                    }
                    className="bg-transparent outline-none"
                    required
                  />
                </h2>
                <p className="text-slate-500 text-[16px] leading-6 border p-2 rounded-lg">
                  <textarea
                    id={`jobExpDesc${index}`}
                    value={job.desc}
                    placeholder="Description"
                    onChange={(e) =>
                      handleJobExperienceChange(index, "desc", e.target.value)
                    }
                    className="p-2 w-full"
                    required
                  />
                </p>
                <Button
                  onClick={() => {
                    const updatedJobExperience = JobExperience.filter(
                      (_, i) => i !== index
                    );
                    setJobExperience(updatedJobExperience);
                  }}
                >
                  <X /> Remove
                </Button>
              </div>
            ))}
        </div>
        <Button
          onClick={() =>
            setJobExperience([
              ...JobExperience,
              { yearsFrom: "", yearsTo: "", position: "", desc: "" },
            ])
          }
        >
          <PlusCircle /> Add Job
        </Button>
      </div>

      <div className="mb-4">
        <h2 className="text-indigo-500 font-semibold mb-2">EDUCATION</h2>
        <div className="w-full mb-4">
          {Education &&
            Education.map((edu, index) => (
              <div key={index} className="flex flex-col gap-y-3">
                <p className="text-slate-500">
                  <input
                    id={`eduYearsFrom${index}`}
                    type="text"
                    value={edu.yearsFrom}
                    placeholder="Years FROM"
                    onChange={(e) =>
                      handleEducationChange(index, "yearsFrom", e.target.value)
                    }
                    className="bg-transparent outline-none"
                    required
                  />
                </p>
                <p className="text-slate-500">
                  <input
                    id={`eduYearsTo${index}`}
                    type="text"
                    value={edu.yearsTo}
                    placeholder="Years TO"
                    onChange={(e) =>
                      handleEducationChange(index, "yearsTo", e.target.value)
                    }
                    className="bg-transparent outline-none"
                    required
                  />
                </p>
                <h2 className="text-slate-500 font-semibold text-[22px] border p-2 rounded-lg">
                  <input
                    id={`eduSchool${index}`}
                    type="text"
                    value={edu.school}
                    placeholder="School"
                    onChange={(e) =>
                      handleEducationChange(index, "school", e.target.value)
                    }
                    className="bg-transparent outline-none"
                    required
                  />
                </h2>
                <p className="text-slate-500 text-[16px] leading-6 border p-2 rounded-lg">
                  <textarea
                    id={`eduDesc${index}`}
                    value={edu.desc}
                    placeholder="Description"
                    onChange={(e) =>
                      handleEducationChange(index, "desc", e.target.value)
                    }
                    className="p-2 w-full"
                    required
                  />
                </p>
                <Button
                  onClick={() => {
                    const updatedEducation = Education.filter(
                      (_, i) => i !== index
                    );
                    setEducation(updatedEducation);
                  }}
                >
                  <X /> Remove
                </Button>
              </div>
            ))}
        </div>
        <Button
          onClick={() =>
            setEducation([
              ...Education,
              { yearsFrom: "", yearsTo: "", school: "", desc: "" },
            ])
          }
        >
          <PlusCircle /> Add Education
        </Button>
      </div>
    </>
  );
};

export default FormExperience;
