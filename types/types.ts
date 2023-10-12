export type JobExperienceTypes = {
  id: string;
  yearsFrom: string;
  yearsTo: string;
  position: string;
  desc: string;
  fileId: string;
};
export type EducationTypes = {
  id: string;
  yearsFrom: string;
  yearsTo: string;
  school: string;
  desc: string;
  fileId: string;
};

export type resumeTypes = {
  id: string;
  name: string;
  userName: string;
  userTitle: string;
  userDateOfBirth: string;
  userPhone: string;
  userEmail: string;
  userAddress: string;
  userSocialPage: string;
  userSummary: string;
  userKnowledge: string[];
  userLanguage: string[];
  JobExperience: JobExperienceTypes;
  Education: EducationTypes;
  userHobby: string;
};
