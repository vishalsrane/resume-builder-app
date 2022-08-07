import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

export default function WorkExperience(props) {
  const { workExperience, setWorkExperience } = props;

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
      </Grid>
    </Box>
  );
}
