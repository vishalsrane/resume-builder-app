import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import KeySkills from "./KeySkills";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const {
    personalInfo,
    setPersonalInfo,
    workExperience,
    setWorkExperience,
    education,
    setEducation,
    keySkills,
    setKeySkills,
    setCurrentState,
    activeTab,
    setActiveTab,
    nextButtonClickedOnPI,
    setNextButtonClickedOnPI,
    nextButtonClickedOnWE,
    setNextButtonClickedOnWE,
    nextButtonClickedOnEdu,
    setNextButtonClickedOnEdu,
    nextButtonClickedOnKS,
    setNextButtonClickedOnKS,
  } = props;
  //   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={activeTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Personal Info" {...a11yProps(0)} />
        <Tab label="Work Experience" {...a11yProps(1)} />
        <Tab label="Education" {...a11yProps(2)} />
        <Tab label="Key Skills" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <PersonalInfo
          previousButtonAction={() => handleChange(null, 0)}
          nextButtonAction={() => handleChange(null, 1)}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          nextButtonClickedOnPI={nextButtonClickedOnPI}
          setNextButtonClickedOnPI={setNextButtonClickedOnPI}
        />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <WorkExperience
          previousButtonAction={() => handleChange(null, 0)}
          nextButtonAction={() => handleChange(null, 2)}
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
          nextButtonClickedOnWE={nextButtonClickedOnWE}
          setNextButtonClickedOnWE={setNextButtonClickedOnWE}
        />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <Education
          previousButtonAction={() => handleChange(null, 1)}
          nextButtonAction={() => handleChange(null, 3)}
          education={education}
          setEducation={setEducation}
          nextButtonClickedOnEdu={nextButtonClickedOnEdu}
          setNextButtonClickedOnEdu={setNextButtonClickedOnEdu}
        />
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
        <KeySkills
          previousButtonAction={() => handleChange(null, 2)}
          nextButtonAction={() => handleChange(null, 3)}
          keySkills={keySkills}
          setKeySkills={setKeySkills}
          setCurrentState={setCurrentState}
          nextButtonClickedOnKS={nextButtonClickedOnKS}
          setNextButtonClickedOnKS={setNextButtonClickedOnKS}
        />
      </TabPanel>
    </Box>
  );
}
