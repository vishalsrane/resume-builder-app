import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Divider, TextField } from "@mui/material";

export default function PersonalInfo(props) {
  const { personalInfo, setPersonalInfo } = props;

  const onChange = (e) => {
    const personalInfoCopy = JSON.parse(JSON.stringify(personalInfo));
    personalInfoCopy[e.target.id] = e.target.value;
    setPersonalInfo(personalInfoCopy);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="mobile"
            label="Mobile"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="address"
            label="Address"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="city"
            label="city"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="state"
            label="state"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="postalCode"
            label="postalCode"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          {/* empty for alignment */}
        </Grid>
        <Grid id="objective-grid" item xs={12}>
          <TextField
            multiline
            id="objective"
            label="Objective"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
        </Grid>

        <Grid item xs={10}></Grid>
        <Grid item xs={1}>
          <Button variant="contained">Back</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained">Next</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
