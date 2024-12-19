import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader, Button, Grid, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

import "./styles/education.css";
import {
  handleEducationAction,
  modifyEducationCountAction,
} from "../../redux/action";

function EducationForm() {
  const educationInfo = useSelector((store) => store.educationData);
  const educationCount = useSelector((store) => store.educationCount);
  const dispatch = useDispatch();
  console.log("store educationInfo", educationInfo);
  console.log("store educationCount", educationCount);
  
  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    const updatedEducationInfo = educationInfo.map((item, i) => {
      if (i === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    console.log(updatedEducationInfo);
    dispatch(handleEducationAction(updatedEducationInfo));
  };
  const AddEducation = () => {
    const list = [...educationInfo];
    list.push({
      courseName: null,
      completionYear: null,
      college: null,
      percentage: null,
    });
    dispatch(handleEducationAction(list));
    dispatch(modifyEducationCountAction(educationCount + 1));
  };
  const DeleteEducation = () => {
    console.log("Decreasing count")
    const list = [...educationInfo];
    list.pop();
   dispatch(handleEducationAction(list));
   dispatch(modifyEducationCountAction( educationCount-1));
  }
  let Form = [];
  for (let i = 0; i < educationCount; i++) {
    Form.push(
      <div key={i} className="instance">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`courseName`}
              defaultValue={
                educationInfo && educationInfo[i]
                  ? educationInfo[i].courseName
                  : ""
              }
              label="Course Name"
              onBlur={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`completionYear`}
              defaultValue={
                educationInfo && educationInfo[i]
                  ? educationInfo[i].completionYear
                  : ""
              }
              label="Completion Year"
              type="number"
              onBlur={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              defaultValue={
                educationInfo && educationInfo[i]
                  ? educationInfo[i].college
                  : ""
              }
              name={`college`}
              label="College/School"
              onBlur={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              defaultValue={
                educationInfo && educationInfo[i]
                  ? educationInfo[i].percentage
                  : ""
              }
              name={`percentage`}
              label="Percentage"
              onBlur={handleChange(i)}
              variant="outlined"
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
          <CardHeader subheader="Add your Education Details" />
          {Form.map((instance) => instance)}
          <div className="footer">
            <Button
              disabled={educationInfo.Count < 2}
              className="deleteButton"
              onClick={DeleteEducation}
              variant="outlined"
              color="primary"
            >
              Delete
            </Button>
            <Button
              className="addButton"
              onClick={AddEducation}
              variant="contained"
              color="primary"
            >
              ADD EDUCATION
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
}

export default EducationForm;
