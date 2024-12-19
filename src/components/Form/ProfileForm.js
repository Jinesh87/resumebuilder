import React from "react";

import { Card, CardHeader, Button, Grid, TextField } from "@mui/material";
import "./styles/profileform.css";
import { connect } from "react-redux";
import { handleProfileAction } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";

function ProfileForm() {
  const profileInfo = useSelector((store) => store.profileData);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;    
    const updatedProfileInfo =
      name === "url"
        ? {
            ...profileInfo,
            [name]: URL.createObjectURL(event.target.files[0]),
            FileName: event.target.files[0].name,
          }
        : { ...profileInfo, [name]: value };    
    dispatch(handleProfileAction(updatedProfileInfo));
  };
  const RemoveImage = () => {
    const prevdata ={ ...profileInfo };
    prevdata["url"] = null
    prevdata["FileName"] =  null

    dispatch(handleProfileAction(prevdata));
  }
  return (
    <>
      <form autoComplete="off" noValidate>
        <Card className="root">
          <CardHeader subheader="Add your profile details" />
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="fname"
                defaultValue={profileInfo ? profileInfo.fname : ""}
                label="First Name"
                onBlur={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="lname"
                defaultValue={profileInfo ? profileInfo.lname : ""}
                label="Last Name"
                onBlur={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="number"
                defaultValue={profileInfo ? profileInfo.phone : null}
                name="phone"
                label="Phone Number"
                onBlur={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="address"
                defaultValue={profileInfo ? profileInfo.address : null}
                label="Address"
                onBlur={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                placeholder="Profile Overview"
                multiline
                rows={2}              
                name="overview"
                defaultValue={profileInfo ? profileInfo.overview : null}
                label="Profile Overview"
                onBlur={handleChange}
                variant="outlined"
              />
            </Grid>   
            <Grid item md={6} xs={12}>
            {profileInfo.url && profileInfo.url.length > 0 ? 
             <Button
             color="secondary"
             variant="outlined"
             onClick={RemoveImage}>
               Remove {profileInfo.FileName}
             </Button>
            
          :
          <div style={{textAlign: "left"}}>
            Profile Image
          <TextField
            fullWidth
            type="file"
            name="url"
            onChange={handleChange}
            variant="outlined"
          />
          </div>         
            }           
            </Grid>
          </Grid>
        </Card>
      </form>
    </>
  );
}
const mapStateToProps = (store) => {
  return store;
};

export default ProfileForm;
