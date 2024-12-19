import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader, Button, Grid, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

import "./styles/skill.css";
import { handleSkillAction, modifySkillCountAction } from "../../redux/action";

function Skills() {
  const skillInfo = useSelector((store) => store.skillData);
  const skillCount = useSelector((store) => store.skillCount);
  const dispatch = useDispatch();
  console.log("store skillInfo", skillInfo);
  console.log("store skillCount", skillCount);

  const handleChange = (index) => (event) => {
    const { value } = event.target;
    const updatedSkillInfo = [...skillInfo];
    updatedSkillInfo[index] = value;
    console.log(updatedSkillInfo);
    dispatch(handleSkillAction(updatedSkillInfo));
  };
  const AddSkill = () => {
    const list = [...skillInfo];
    list.push(null);
    console.log("Increasing count");
    dispatch(handleSkillAction(list));
    dispatch(modifySkillCountAction(skillCount + 1));
  };
  const DeleteSkill = () => {
    console.log("Decreasing count");
    const list = [...skillInfo];
    list.pop();
    dispatch(handleSkillAction(list));
    dispatch(modifySkillCountAction(skillCount - 1));
  };
  let Form = [];
  for (let i = 0; i < skillCount; i++) {
    Form.push(
      <div className="instance">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`skill`}
              defaultValue={skillInfo && skillInfo[i] ? skillInfo[i] : ""}
              label="Skill"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }
  return (
    <>
      <form autoComplete="off" noValidate>
        <Card>
          <CardHeader subheader="Add your Skills" />
          {Form.map((instance) => instance)}
          <div className="footer">
            <Button
              disabled={skillCount < 2}
              className="deleteButton"
              onClick={DeleteSkill}
              variant="outlined"
              color="primary"
            >
              Delete Skill
            </Button>
            <Button
              className="addButton"
              onClick={AddSkill}
              variant="contained"
              color="primary"
            >
              ADD SKILL
            </Button>
          </div>
        </Card>

        
      </form>
    </>
  );
}

export default Skills;
