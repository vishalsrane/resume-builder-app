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
    nextButtonClickedOnKS,
    setNextButtonClickedOnKS,
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
            value={keySkills.skill1}
            error={nextButtonClickedOnKS && keySkills.skill1 === ""}
            helperText={
              nextButtonClickedOnKS && keySkills.skill1 === ""
                ? "Incorrect entry."
                : ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="skill2"
            label="Skill 2"
            variant="outlined"
            onChange={onChange}
            value={keySkills.skill2}
            error={nextButtonClickedOnKS && keySkills.skill2 === ""}
            helperText={
              nextButtonClickedOnKS && keySkills.skill2 === ""
                ? "Incorrect entry."
                : ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="skill3"
            label="Skill 3"
            variant="outlined"
            onChange={onChange}
            value={keySkills.skill3}
            error={nextButtonClickedOnKS && keySkills.skill3 === ""}
            helperText={
              nextButtonClickedOnKS && keySkills.skill3 === ""
                ? "Incorrect entry."
                : ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="skill4"
            label="Skill 4"
            variant="outlined"
            onChange={onChange}
            value={keySkills.skill4}
            error={nextButtonClickedOnKS && keySkills.skill4 === ""}
            helperText={
              nextButtonClickedOnKS && keySkills.skill4 === ""
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
              if (Object.values(keySkills).indexOf("") > -1) {
                setNextButtonClickedOnKS(true);
              } else {
                setNextButtonClickedOnKS(true);
                setCurrentState(3);
              }
            }}
            variant="contained"
          >
            Preview
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
