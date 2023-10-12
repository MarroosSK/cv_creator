"use client";

import { ResumeContext, ResumeContextType } from "@/app/context/resume-context";
import { Calendar, Globe2, Mail, MapPin, Phone } from "lucide-react";
import { useContext } from "react";

const FormHeading = () => {
  const {
    userName,
    setUserName,
    userTitle,
    setUserTitle,
    userDateOfBirth,
    setUserDateOfBirth,
    userPhone,
    setUserPhone,
    userEmail,
    setUserEmail,
    userAddress,
    setUserAddress,
    userSocialPage,
    setUserSocialPage,
  } = useContext(ResumeContext) as ResumeContextType;

  return (
    <div className="p-6  flex  justify-between">
      <div>
        <ul className="space-y-2">
          <li className="text-slate-500 flex items-center gap-x-2 border p-2 rounded-lg">
            {" "}
            <Calendar />{" "}
            <input
              type="text"
              value={userDateOfBirth}
              placeholder="Date of Birth"
              onChange={(e) => setUserDateOfBirth(e.target.value)}
              className="bg-transparent outline-none"
            />
          </li>
          <li className="text-slate-500 flex items-center gap-x-2 border p-2 rounded-lg">
            <Phone />{" "}
            <input
              type="text"
              value={userPhone}
              placeholder="Phone"
              onChange={(e) => setUserPhone(e.target.value)}
              className="bg-transparent outline-none"
            />
          </li>
          <li className="text-slate-500 flex items-center gap-x-2 border p-2 rounded-lg">
            <Mail />{" "}
            <input
              type="text"
              value={userEmail}
              placeholder="E-mail"
              onChange={(e) => setUserEmail(e.target.value)}
              className="bg-transparent outline-none"
            />
          </li>
          <li className="text-slate-500 flex items-center gap-x-2 border p-2 rounded-lg">
            <MapPin />{" "}
            <input
              type="text"
              value={userAddress}
              placeholder="Address"
              onChange={(e) => setUserAddress(e.target.value)}
              className="bg-transparent outline-none"
            />
          </li>
          <li className="text-slate-500 flex items-center gap-x-2 border p-2 rounded-lg">
            {" "}
            <Globe2 />
            <input
              type="text"
              value={userSocialPage}
              placeholder="Homepage"
              onChange={(e) => setUserSocialPage(e.target.value)}
              className="bg-transparent outline-none"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-2">
        {" "}
        <h2 className="text-slate-500 text-2xl font-semibold">
          <input
            type="text"
            value={userName}
            placeholder="Name"
            onChange={(e) => setUserName(e.target.value)}
            className="p-2 bg-transparent outline-none border rounded-lg"
          />
        </h2>
        <p className="text-slate-500">
          <input
            type="text"
            value={userTitle}
            placeholder="Title"
            onChange={(e) => setUserTitle(e.target.value)}
            className="p-2 bg-transparent outline-none border rounded-lg"
          />
        </p>
      </div>
    </div>
  );
};

export default FormHeading;
