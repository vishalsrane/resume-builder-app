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

  return (
    <div className="App">
      <Header />
      <VerticalTabs
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
      />
    </div>
  );
}

export default App;
