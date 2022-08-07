import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Divider, TextField } from "@mui/material";

export default function KeySkills(props) {
  const {
    keySkills,
    setKeySkills,
    previousButtonAction,
    nextButtonAction,
    setCurrentState,
  } = props;

  const onChange = (e) => {
    console.log(e.target.id);
    const keySkillsCopy = JSON.parse(JSON.stringify(keySkills));
    keySkillsCopy[e.target.id] = e.target.value;
    setKeySkills(keySkillsCopy);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="skill1"
            label="Skill 1"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="skill2"
            label="Skill 2"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="skill3"
            label="Skill 3"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="skill4"
            label="Skill 4"
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
          <Button onClick={() => setCurrentState(3)} variant="contained">
            Preview
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
