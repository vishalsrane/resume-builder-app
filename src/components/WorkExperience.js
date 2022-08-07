import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Divider, TextField } from "@mui/material";

export default function WorkExperience(props) {
  const {
    workExperience,
    setWorkExperience,
    previousButtonAction,
    nextButtonAction,
  } = props;

  const onChange = (e) => {
    console.log(e.target.id);
    const workExperienceCopy = JSON.parse(JSON.stringify(workExperience));
    workExperienceCopy[e.target.id] = e.target.value;
    setWorkExperience(workExperienceCopy);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="jobTitle"
            label="Job Title"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="orgName"
            label="Organization Name"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="startYear"
            label="Start Year"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="endYear"
            label="End Year"
            variant="outlined"
            onChange={onChange}
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
          <Button onClick={nextButtonAction} variant="contained">
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
