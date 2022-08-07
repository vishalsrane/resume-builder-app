import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

export default function Education(props) {
  const { education, setEducation } = props;

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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="degree"
            label="Degree"
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
