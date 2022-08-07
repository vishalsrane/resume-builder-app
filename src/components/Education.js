import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Divider, TextField } from "@mui/material";

export default function Education(props) {
  const {
    education,
    setEducation,
    previousButtonAction,
    nextButtonAction,
    nextButtonClickedOnEdu,
    setNextButtonClickedOnEdu,
  } = props;

  const onChange = (e) => {
    console.log(e.target.id);
    const educationCopy = JSON.parse(JSON.stringify(education));
    educationCopy[e.target.id] = e.target.value;
    setEducation(educationCopy);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="type"
            label="Type"
            variant="outlined"
            onChange={onChange}
            value={education.type}
            error={nextButtonClickedOnEdu && education.type === ""}
            helperText={
              nextButtonClickedOnEdu && education.type === ""
                ? "Incorrect entry."
                : ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          {/* empty grid for alignment */}
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="university"
            label="University"
            variant="outlined"
            onChange={onChange}
            value={education.university}
            error={nextButtonClickedOnEdu && education.university === ""}
            helperText={
              nextButtonClickedOnEdu && education.university === ""
                ? "Incorrect entry."
                : ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="degree"
            label="Degree"
            variant="outlined"
            onChange={onChange}
            value={education.degree}
            error={nextButtonClickedOnEdu && education.degree === ""}
            helperText={
              nextButtonClickedOnEdu && education.degree === ""
                ? "Incorrect entry."
                : ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="startYear"
            label="Start Year"
            variant="outlined"
            onChange={onChange}
            value={education.startYear}
            error={nextButtonClickedOnEdu && education.startYear === ""}
            helperText={
              nextButtonClickedOnEdu && education.startYear === ""
                ? "Incorrect entry."
                : ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="endYear"
            label="End Year"
            variant="outlined"
            onChange={onChange}
            value={education.endYear}
            error={nextButtonClickedOnEdu && education.endYear === ""}
            helperText={
              nextButtonClickedOnEdu && education.endYear === ""
                ? "Incorrect entry."
                : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
        </Grid>

        <Grid item xs={10}></Grid>
        <Grid item xs={1}>
          <Button onClick={previousButtonAction} variant="contained">
            Back
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={() => {
              if (Object.values(education).indexOf("") > -1) {
                setNextButtonClickedOnEdu(true);
              } else {
                setNextButtonClickedOnEdu(true);
                nextButtonAction();
              }
            }}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
