"use client";
import { createContext, useState } from "react";

export type ResumeContextType = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userTitle: string;
  setUserTitle: React.Dispatch<React.SetStateAction<string>>;
  userDateOfBirth: string;
  setUserDateOfBirth: React.Dispatch<React.SetStateAction<string>>;
  userPhone: string;
  setUserPhone: React.Dispatch<React.SetStateAction<string>>;
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  userAddress: string;
  setUserAddress: React.Dispatch<React.SetStateAction<string>>;
  userSocialPage: string;
  setUserSocialPage: React.Dispatch<React.SetStateAction<string>>;
  userSummary: string;
  setUserSummary: React.Dispatch<React.SetStateAction<string>>;
  userKnowledge: string[];
  setUserKnowledge: React.Dispatch<React.SetStateAction<string[]>>;
  userLanguage: string[];
  setUserLanguage: React.Dispatch<React.SetStateAction<string[]>>;
  JobExperience: {
    yearsFrom: string;
    yearsTo: string;
    position: string;
    desc: string;
  }[];
  setJobExperience: React.Dispatch<
    React.SetStateAction<
      {
        yearsFrom: string;
        yearsTo: string;
        position: string;
        desc: string;
      }[]
    >
  >;
  Education: {
    yearsFrom: string;
    yearsTo: string;
    school: string;
    desc: string;
  }[];
  setEducation: React.Dispatch<
    React.SetStateAction<
      {
        yearsFrom: string;
        yearsTo: string;
        school: string;
        desc: string;
      }[]
    >
  >;
  userHobby: string;
  setUserHobby: React.Dispatch<React.SetStateAction<string>>;
};

export const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //HEADER
  const [userName, setUserName] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [userDateOfBirth, setUserDateOfBirth] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userSocialPage, setUserSocialPage] = useState("");
  //SUMMARY
  const [userSummary, setUserSummary] = useState("");
  //KNOWLEDGE
  const [userKnowledge, setUserKnowledge] = useState<string[]>([]);
  //LANGUAGE
  const [userLanguage, setUserLanguage] = useState<string[]>([]);
  //JOB EXPERIENCE
  const [JobExperience, setJobExperience] = useState([
    {
      yearsFrom: "",
      yearsTo: "",
      position: "",
      desc: "",
    },
  ]);
  //EDUCATION
  const [Education, setEducation] = useState([
    {
      yearsFrom: "",
      yearsTo: "",
      school: "",
      desc: "",
    },
  ]);
  //HOBBY
  const [userHobby, setUserHobby] = useState("");

  return (
    <ResumeContext.Provider
      value={{
        userName,
        setUserName,
        userTitle,
        setUserTitle,
        userDateOfBirth,
        setUserDateOfBirth,
        userPhone,
        userEmail,
        setUserEmail,
        setUserPhone,
        userAddress,
        setUserAddress,
        userSocialPage,
        setUserSocialPage,
        userSummary,
        setUserSummary,
        userKnowledge,
        setUserKnowledge,
        userLanguage,
        setUserLanguage,
        JobExperience,
        setJobExperience,
        Education,
        setEducation,
        userHobby,
        setUserHobby,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
