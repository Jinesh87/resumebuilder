import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./styles/profileform.css";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { handleExperienceAction } from "../../redux/action";

function Experience() {
  const experienceInfo = useSelector((store) => store.experienceData);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedValue =
      (name === "startdate" || name === "enddate") && value instanceof Date
        ? value.toISOString()
        : value;
    const updatedExperienceInfo = {
      ...experienceInfo,
      [name]: updatedValue,
    };
    dispatch(handleExperienceAction(updatedExperienceInfo));
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form autoComplete="off" noValidate>
          <Card className="root">
            <CardHeader subheader="Update your experience" />
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  name="jobtitle"
                  defaultValue={experienceInfo ? experienceInfo.jobtitle : ""}
                  label="Job Title"
                  onBlur={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  name="employer"
                  defaultValue={experienceInfo ? experienceInfo.employer : ""}
                  label="Employer"
                  onBlur={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <DatePicker
                  value={
                    experienceInfo.startdate
                      ? dayjs(experienceInfo.startdate)
                      : null
                  }
                  inputFormat="DD-MM-YYYY" // 13-09-2022
                  onChange={(date) =>
                    handleChange({ target: { name: "startdate", value: date } })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth // Set fullWidth to true
                      label="Start Date"
                      name="startdate"
                      defaultValue={dayjs("2022-01-01")}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      onClick={() => {}}
                    />
                  )}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <DatePicker
                  value={
                    experienceInfo.enddate
                      ? dayjs(experienceInfo.enddate)
                      : null
                  }
                  inputFormat="DD-MM-YYYY" // 13-09-2022
                  onChange={(date) =>
                    handleChange({ target: { name: "enddate", value: date } })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth // Set fullWidth to true
                      label="End Date"
                      name="enddate"
                      defaultValue={dayjs("2022-01-01")}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      onClick={() => {}}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Card>
        </form>
      </LocalizationProvider>
    </>
  );
}

export default Experience;
