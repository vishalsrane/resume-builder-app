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

  return (
    <div className="App">
      <Header />
      <VerticalTabs
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
    </div>
  );
}

export default App;
