"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Calendar, Globe2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { EducationTypes, JobExperienceTypes } from "@/types/types";

const ResumeView = ({ initialData }: { initialData: any }) => {
  //CANVAS & PDF
  const [loader, setLoader] = useState(false);

  const downloadPDF = async () => {
    const capture = document.getElementById("actual-resume");
    setLoader(true);
    if (capture) {
      await html2canvas(capture).then((canvas) => {
        const imgData = canvas.toDataURL("img/png");
        const doc = new jsPDF("p", "px", "a4");
        const componentWidth = 450;
        const componentHeight = 600;
        doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save(`${initialData.name}.pdf`);
        toast.success("Downloaded");
      });
    }
  };

  return (
    <section>
      <div id="actual-resume" className=" border bg-white rounded-md p-4">
        {/* HEADING */}
        <div className="p-6 rounded-sm flex  justify-between bg-slate-200">
          <div>
            <ul className="space-y-2">
              <li className="text-slate-500 flex items-center gap-x-2">
                {" "}
                <Calendar /> {initialData.userDateOfBirth}
              </li>
              <li className="text-slate-500 flex items-center gap-x-2">
                <Phone /> {initialData.userPhone}
              </li>
              <li className="text-slate-500 flex items-center gap-x-2">
                <Mail /> {initialData.userEmail}
              </li>
              <li className="text-slate-500 flex items-center gap-x-2">
                <MapPin /> {initialData.userAddress}
              </li>
              <li className="text-slate-500 flex items-center gap-x-2">
                {" "}
                <Globe2 />
                {initialData.userSocialPage}
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h2 className="text-slate-500 text-2xl font-semibold">
              {initialData.userName}
            </h2>
            <p className="text-slate-500">{initialData.userTitle}</p>
          </div>
        </div>
        {/* SUMMARY */}
        <div className="p-6 flex flex-col">
          <h2 className="text-indigo-500 font-semibold mb-2">SUMMARY</h2>
          <p className="leading-6 text-[16px] text-slate-500">
            {initialData.userSummary}
          </p>
        </div>

        {/* SKILLS */}
        <div className="p-6 flex gap-x-10 mt-2">
          {/* KNOWLEDGE + LANGUAGE */}
          <div className="w-1/3">
            <div className="mb-2">
              <h2 className="text-indigo-500 font-semibold mb-2">KNOWLEDGE</h2>
              <ul className="p-6 rounded-sm flex  flex-col gap-y-2 bg-slate-200">
                {initialData.userKnowledge &&
                  initialData.userKnowledge.map(
                    (know: string, index: number) => (
                      <li
                        key={index}
                        className="text-slate-500 flex items-center"
                      >
                        {know}
                      </li>
                    )
                  )}
              </ul>
            </div>

            {/* LANGUAGE */}
            <div className="mb-2">
              <h2 className="text-indigo-500 font-semibold mb-2">LANGUAGE</h2>
              <ul className="p-6 rounded-sm flex  flex-col gap-y-2 bg-slate-200">
                {initialData.userLanguage &&
                  initialData.userLanguage.map(
                    (lang: string, index: number) => (
                      <li
                        key={index}
                        className="text-slate-500 flex items-center"
                      >
                        {lang}
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
          {/* EDUCATION + WORK EXPERIENCE */}
          <div>
            {/* WORKING EXPERIENCE */}
            <div className="w-3/4 mb-4">
              <h2 className="text-indigo-500 font-semibold mb-2">
                JOB EXPERIENCE
              </h2>
              <div className="w-full mb-4">
                {initialData.JobExperience &&
                  initialData.JobExperience.map(
                    (job: JobExperienceTypes, index: number) => (
                      <div key={index}>
                        <p className="text-slate-500">{job.yearsFrom}</p>
                        <p className="text-slate-500">{job.yearsTo}</p>
                        <h2 className="text-slate-500 font-semibold text-[22px]">
                          {job.position}
                        </h2>
                        <p className="text-slate-500 text-[16px] leading-6">
                          {job.desc}
                        </p>
                      </div>
                    )
                  )}
              </div>
            </div>
            {/* EDUCATION */}
            <div className="w-3/4 mb-4">
              <h2 className="text-indigo-500 font-semibold mb-2">EDUCATION</h2>
              <div className="w-full mb-4">
                {initialData.Education &&
                  initialData.Education.map(
                    (edu: EducationTypes, index: number) => (
                      <div key={index}>
                        <p className="text-slate-500">{edu.yearsFrom}</p>
                        <p className="text-slate-500">{edu.yearsTo}</p>
                        <h2 className="text-slate-500 font-semibold text-[22px]">
                          {edu.school}
                        </h2>
                        <p className="text-slate-500  text-[16px] leading-6">
                          {edu.desc}
                        </p>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
        {/* HOBBY */}
        <div className="p-6 w-2/3 mt-2">
          <h2 className="text-indigo-500 font-semibold mb-2">HOBBY</h2>
          <p className="text-slate-500 text-[16px] leading-6">
            {initialData.userHobby}
          </p>
        </div>
      </div>

      {/* DOWNLOAD */}
      <div className="mt-7 text-center">
        <Button
          variant="default"
          onClick={() => downloadPDF()}
          disabled={!(loader === false)}
          size="lg"
        >
          {loader ? <span>Downloading</span> : <span>Download CV</span>}
        </Button>
      </div>
    </section>
  );
};

export default ResumeView;
