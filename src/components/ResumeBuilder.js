import { Box } from "@mui/material";
import * as React from "react";
import Template1 from "./Template1";
import VerticalTabs from "./VerticalTabs";

export default function ResumeBuilder(props) {
  const {
    personalInfo,
    setPersonalInfo,
    workExperience,
    setWorkExperience,
    education,
    setEducation,
    keySkills,
    setKeySkills,
    resumeName,
    setResumeName,
  } = props;
  const [currentState, setCurrentState] = React.useState(2);
  return (
    <Box sx={{ flexGrow: 1 }}>
      {currentState === 2 && (
        <VerticalTabs
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
          education={education}
          setEducation={setEducation}
          keySkills={keySkills}
          setKeySkills={setKeySkills}
          setCurrentState={setCurrentState}
        />
      )}
      {currentState === 3 && (
        <Template1
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
          education={education}
          setEducation={setEducation}
          keySkills={keySkills}
          setKeySkills={setKeySkills}
          setCurrentState={setCurrentState}
          resumeName={resumeName}
          setResumeName={setResumeName}
        />
      )}
    </Box>
  );
}
