import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader, Button, Grid, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./styles/experience.css";
import {
  handleExperienceAction,
  modifyExperienceCountAction,
} from "../../redux/action";

function Experience() {
  const experienceInfo = useSelector((store) => store.experienceData);
  const experienceCount = useSelector((store) => store.experienceCount);
  const dispatch = useDispatch();
  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    const updatedValue =
      (name === "startdate" || name === "enddate") && value instanceof Date
        ? value.toISOString()
        : value;

    const updatedExperienceInfo = experienceInfo.map((info, i) => {
      if (i === index) {
        return {
          ...info,
          [name]: updatedValue,
        };
      }
      return info;
    });
    console.log(updatedExperienceInfo);
    dispatch(handleExperienceAction(updatedExperienceInfo));
  };
  const AddExperience = () => {
    const list = [...experienceInfo];
    list.push({
      jobtitle: null,
      employer: null,
      startdate: null,
      enddate: null,
    });
    dispatch(handleExperienceAction(list));
    dispatch(modifyExperienceCountAction(experienceCount + 1));
  };
  const DeleteExperience = () => {
    console.log("Decreasing count");
    const list = [...experienceInfo];
    list.pop();
    dispatch(handleExperienceAction(list));
    dispatch(modifyExperienceCountAction(experienceCount - 1));
  };
  let Form = [];
  for (let i = 0; i < experienceCount; i++) {
    Form.push(
      <div key={i} className="instance">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`jobtitle`}
              defaultValue={
                experienceInfo && experienceInfo[i]
                  ? experienceInfo[i].jobtitle
                  : ""
              }
              label="Job Title"
              onBlur={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`employer`}
              defaultValue={
                experienceInfo && experienceInfo[i]
                  ? experienceInfo[i].employer
                  : ""
              }
              label="Employer"
              onBlur={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <DatePicker
              value={
                experienceInfo[i].startdate
                  ? dayjs(experienceInfo[i].startdate)
                  : null
              }
              inputFormat="DD-MM-YYYY"
              onChange={(sdate) =>
                handleChange(i)({ target: { name: "startdate", value: sdate } })
              }
              textField={(props) => (
                <TextField
                  {...props}
                  required
                  fullWidth
                  defaultValue={
                    experienceInfo && experienceInfo[i]
                      ? experienceInfo[i].startdate
                      : ""
                  }
                  name={`startdate`}
                  label="Start Date"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <DatePicker
              value={
                experienceInfo[i].enddate
                  ? dayjs(experienceInfo[i].enddate)
                  : null
              }
              inputFormat="DD-MM-YYYY"
              onChange={(edate) =>
                handleChange(i)({ target: { name: "enddate", value: edate } })
              }
              textField={(props) => (
                <TextField
                  {...props}
                  required
                  fullWidth
                  defaultValue={
                    experienceInfo && experienceInfo[i]
                      ? experienceInfo[i].enddate
                      : ""
                  }
                  name={`enddate`}
                  label="End Date"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              )}
            />
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader subheader="Add your Experience Details" />
            {Form.map((instance) => instance)}
            <div className="footer">
              <Button
                disabled={experienceCount < 2}
                className="deleteButton"
                onClick={DeleteExperience}
                variant="outlined"
                color="primary"
              >
                Delete
              </Button>
              <Button
                className="addButton"
                onClick={AddExperience}
                variant="contained"
                color="primary"
              >
                ADD EXPERIENCE
              </Button>
            </div>
          </Card>
        </form>
      </LocalizationProvider>
    </>
  );
}

export default Experience;
