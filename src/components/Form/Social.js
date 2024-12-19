import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader, Button, Grid, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

import "./styles/social.css";
import {
  handleSocialAction,
  modifySocialCountAction,
} from "../../redux/action";

function Social() {
  const socialInfo = useSelector((store) => store.socialData);
  const socialCount = useSelector((store) => store.socialCount);
  const dispatch = useDispatch();
  console.log("store socialInfo", socialInfo);
  console.log("store socialCount", socialCount);

  const handleChange = (index) => (event) => {
    const { value } = event.target;
    const updatedSkillInfo = [...socialInfo];
    updatedSkillInfo[index] = value;
    dispatch(handleSocialAction(updatedSkillInfo));
  };

  const DeleteSocial = () => {
    const list = [...socialInfo];
    list.pop();
    console.log("Decreasing count");
    dispatch(handleSocialAction(list));
    dispatch(modifySocialCountAction(socialCount - 1));
  };

  const AddSocial = () => {
    const list = [...socialInfo];
    list.push(null);
    console.log("Increasing count");
    dispatch(handleSocialAction(list));
    dispatch(modifySocialCountAction(socialCount + 1));
  };

  let Form = [];
  for (let i = 0; i < socialCount; i++) {
    Form.push(
      <div key={i} className="instance">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`Social`}
              defaultValue={socialInfo && socialInfo[i] ? socialInfo[i] : ""}
              label="Social Links"
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
              disabled={socialCount < 2}
              className="deleteButton"
              onClick={DeleteSocial}
              variant="outlined"
              color="primary"
            >
              Delete Social
            </Button>
            <Button
              className="addButton"
              onClick={AddSocial}
              variant="contained"
              color="primary"
            >
              ADD SOCIAL
            </Button>
          </div>
        </Card>

        
      </form>
    </>
  );
}

export default Social;
