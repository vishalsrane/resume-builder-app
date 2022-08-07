import { useState } from "react";
import Header from "./components/Header";
import VerticalTabs from "./components/VerticalTabs";

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

  return (
    <div className="App">
      <Header />
      <VerticalTabs
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
        education={education}
        setEducation={setEducation}
        keySkills={keySkills}
        setKeySkills={setKeySkills}
      />
    </div>
  );
}

export default App;
