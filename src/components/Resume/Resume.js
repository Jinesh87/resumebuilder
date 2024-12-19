import React from "react";
import {
  Box,
  CardHeader,
  Button,
  Grid,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./resume.css";
function Resume() {
  const profileInformation = useSelector((store) => store.profileData);
  const experienceInfo = useSelector((store) => store.experienceData);
  const educationInfo = useSelector((store) => store.educationData);
  const skillInfo = useSelector((store) => store.skillData);
  const socialInfo = useSelector((store) => store.socialData);

  const handlePrint = () => {};
  return (
    <div>
      <Button color="secondary" variant="contained" onClick={handlePrint}>
        Download / Preview
      </Button>
      <Paper className="ParentResumeModel" elevation={1}>
        <div elevation={1} className="ParentResumePaper">
          <Grid container spacing={3}>
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            {/* PHOTO , NAME AND ADDRESS */}
            <Grid item xs={3}>
              <div className="profilePhoto">
                {profileInformation ? (
                  <img
                    src={profileInformation.url}
                    alt="Please update image url"
                    width="100px"
                    heigh="100px"
                  ></img>
                ) : null}
              </div>
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h2">
                    {profileInformation ? profileInformation.fname : null}{" "}
                    {profileInformation ? profileInformation.lname : null}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Address :{" "}
                    {profileInformation ? profileInformation.address : null}
                  </Typography>
                  <Typography variant="subtitle1">
                    Phone Number:{" "}
                    {profileInformation ? profileInformation.phone : null}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="h2">
                    Profile Overview
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    {profileInformation ? profileInformation.overview : null}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Grid container spacing={3}>
                    {/* Skills */}
                    <Grid item xs={12}>
                      <div className="ParentSkillSection">
                        <Typography variant="h5" component="h2">
                          Skills
                        </Typography>
                        <Divider />
                        {skillInfo &&
                          skillInfo.length > 0 &&
                          skillInfo.map((item) => <li>{item}</li>)}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={9}>
                  <Grid container spacing={3}>
                      {/* Overview*/}
                  <Grid item xs={12}>
                      <div className="header">
                        <Typography variant="h5" component="h2">
                          Education
                        </Typography>
                      </div>
                      <Divider />

                      {educationInfo &&
                        educationInfo.length > 0 &&
                        educationInfo.map((instance) => (
                          <div className="content">
                            <Typography variant="h6" component="h2">
                              {instance.college ? instance.college : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.completionYear
                                ? " Graduation Year : " +
                                  instance.completionYear
                                : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.courseName ? instance.courseName : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.percentage
                                ? " Percentage : " + instance.percentage + "%"
                                : null}
                            </Typography>
                          </div>
                        ))}
                    </Grid>
                    {/* Education */}
                    <Grid item xs={12}>
                      <div className="header">
                        <Typography variant="h5" component="h2">
                          Education
                        </Typography>
                      </div>
                      <Divider />

                      {educationInfo &&
                        educationInfo.length > 0 &&
                        educationInfo.map((instance) => (
                          <div className="content">
                            <Typography variant="h6" component="h2">
                              {instance.college ? instance.college : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.completionYear
                                ? " Graduation Year : " +
                                  instance.completionYear
                                : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.courseName ? instance.courseName : null}
                            </Typography>
                            <Typography variant="body2">
                              {instance.percentage
                                ? " Percentage : " + instance.percentage + "%"
                                : null}
                            </Typography>
                          </div>
                        ))}
                    </Grid>

                    <Grid item xs={12}>
                      {/* projects */}
                      <div className="header">
                        <Typography variant="h5" component="h2">
                          Experience
                        </Typography>
                      </div>
                      <Divider />

                      {experienceInfo &&
                        experienceInfo.length > 0 &&
                        experienceInfo.map((instance) => (
                          <div className="content">
                            <Typography variant="h6" component="h2">
                              {instance.jobtitle ? instance.jobtitle : null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.employer ? instance.employer : null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.startdate
                                ? "Duration : " +  instance.startdate.toISOString().split('T')[0] +" - "+instance.startdate.toISOString().split('T')[0]
                                : null}
                            </Typography>
                          </div>
                        ))}
                    </Grid>
                    {/* Social */}
                    <Grid item xs={12}>
                      <div className="ParentSkillSection">
                        <Typography variant="h5" component="h2">
                          Social Links
                        </Typography>
                        <Divider />
                        {socialInfo &&
                          socialInfo.length > 0 &&
                          socialInfo.map((item) => (
                            <li>
                              <a href={item} target="_blank">
                                {item}
                              </a>
                            </li>
                          ))}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}

export default Resume;
