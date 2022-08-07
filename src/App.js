import { useState } from "react";
import Header from "./components/Header";
import ResumeBuilder from "./components/ResumeBuilder";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
  });

  const [workExperience, setWorkExperience] = useState({
    jobTitle: "",
    orgName: "",
    startYear: "",
    endYear: "",
  });

  const [education, setEducation] = useState({
    type: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  });

  const [keySkills, setKeySkills] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
  });
  const [resumeName, setResumeName] = useState("");

  return (
    <div className="App">
      <Header />
      <ResumeBuilder
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
        education={education}
        setEducation={setEducation}
        keySkills={keySkills}
        setKeySkills={setKeySkills}
        resumeName={resumeName}
        setResumeName={setResumeName}
      />
    </div>
  );
}

export default App;
