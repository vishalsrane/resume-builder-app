import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import jsPDF from "jspdf";

export default function Template1(props) {
  const {
    personalInfo,
    keySkills,
    workExperience,
    education,
    previousButtonAction,
    nextButtonAction,
    resumeName,
    setResumeName,
    setCurrentState,
    setActiveTab,
  } = props;

  const onChange = (e) => {
    setResumeName(e.target.value);
  };

  const saveAsPdf = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#resume"), {
      callback: (pdf) => {
        pdf.save(resumeName + ".pdf");
      },
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          id="resume"
          style={{ padding: "10px", width: "587px", height: "834px" }}
          item
          xs={8}
        >
          <Grid item xs={8}>
            <Typography variant="h5" gutterBottom component="div">
              {personalInfo.firstName + " " + personalInfo.lastName ||
                "Chandini Syed"}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {personalInfo.objective ||
                "My Objective My Objective My Objective My Objective My Objective My Objective My Objective My Objective My Objective My Objective My Objective "}
            </Typography>
            <Divider style={{ marginTop: "5px" }} />
          </Grid>
          <Grid item xs={4}>
            <div>
              <div>{personalInfo.email || "test@test.com"}</div>
              <div>{personalInfo.mobile || "+91 9500100134"}</div>
              <div>{personalInfo.address || `6/69 Muthukalampatti street`}</div>
              <div>{personalInfo.city || "Bengaluru"}</div>
              <div>{personalInfo.state || "Karnataka"}</div>
              <div>{personalInfo.postalCode || "560011"}</div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom component="div">
              {"Key Skills"}
            </Typography>
            <p>
              <ul>{keySkills.skill1 || "Python"}</ul>
              <ul>{keySkills.skill1 || "Java"}</ul>
              <ul>{keySkills.skill1 || "Java Script"}</ul>
              <ul>{keySkills.skill1 || "RectJS"}</ul>
            </p>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom component="div">
              {"Work Experience"}
            </Typography>
            <p>
              <ul>{workExperience.jobTitle || "Python"}</ul>
              <ul>{workExperience.orgName || "Java"}</ul>
              <ul>
                {(workExperience.startYear || "01-01-2020") +
                  " To " +
                  (workExperience.endYear || "01-01-2022")}
              </ul>
            </p>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom component="div">
              {"Education Details"}
            </Typography>
            <p>
              <ul>{education.type || "Graduation"}</ul>
              <ul>{education.university || "Andhra University"}</ul>
              <ul>{education.degree || "Bechelore of engineering"}</ul>
              <ul>
                {(education.startYear || "01-01-2020") +
                  " To " +
                  (education.endYear || "01-01-2022")}
              </ul>
            </p>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Typography variant="h5" gutterBottom component="div">
            {"Create File Name"}
          </Typography>
          <TextField
            id="resumeName"
            label="Resume Name"
            variant="outlined"
            onChange={onChange}
          />
          <br />
          <Button
            onClick={() => {
              console.log("back button clivked in summary");
              setCurrentState(2);
              setActiveTab(3);
            }}
            variant="contained"
          >
            Back
          </Button>
          <Button onClick={saveAsPdf} variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
