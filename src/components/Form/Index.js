import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./styles/index.css";
import ProfileForm from "./ProfileForm";
import EducationForm from "./EducationForm";
import Skills from "./Skills";
import Experience from "./Experience";
import Social from "./Social";
import Resume from "../Resume/Resume";
import { useSelector } from "react-redux";

function Index() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const profileInformation = useSelector((store) => store.profileData);
  const experienceInfo = useSelector((store) => store.experienceData);
  const educationInfo = useSelector((store) => store.educationData);
  const skillInfo = useSelector((store) => store.skillData);
  const socialInfo = useSelector((store) => store.socialData);

  const completedSteps = () => {
    console.log("Completed", Object.keys(completed).length);
    return Object.keys(completed).length;
  };
  const totalSteps = () => {
    return steps.length;
  };
  const steps = [
    { label: "Profile Section", path: "/profile", element: <ProfileForm /> },
    { label: "Experience", path: "/experience", element: <Experience /> },
    {
      label: "Education Section",
      path: "/education",
      element: <EducationForm />,
    },
    { label: "Skills Sector", path: "/skills", element: <Skills /> },

    { label: "Social", path: "/social", element: <Social /> },
  ];

  function getSteps() {
    return [
      "Profile Section",
      "Experience",
      "Education Section",
      "Skills Sector",
      "Social",
    ];
  }

  const allStepsCompleted = () => {
    console.log("completedSteps ", completedSteps());
    console.log("totalSteps ", totalSteps());
    console.log("allStepsCompleted ", completedSteps() === totalSteps());
    
    return completedSteps() === totalSteps();
  };

  const handleReset = () => {
    window.location.reload(false);
    navigate("/profile");
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const handleNext = () => {
    console.log('isLastStep', isLastStep());
    console.log("allStepsCompleted()",allStepsCompleted());
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    if (newActiveStep < steps.length) {
        setActiveStep(newActiveStep);    
        navigate(steps[newActiveStep].path);
    }
};

const handleBack = () => {
    const newActiveStep = activeStep - 1;

    if (newActiveStep >= 0 && newActiveStep < steps.length) {
        setActiveStep(newActiveStep);   
        navigate(steps[newActiveStep].path);
    }
};

  const ValidateProfileDetails = (profileInfo) => {
    if (!profileInformation) {
      alert("Profile information is missing.");
      return false;
    }
    if (
      !profileInformation.overview ||
      profileInformation.overview.trim().length === 0
    ) {
      alert("Please provide an overview.");
      return false;
    }

    let sentence = profileInformation.overview.trim();
    let words = sentence.split(/\s+/);

    if (
      !profileInformation.fname ||
      !profileInformation.lname ||
      !profileInformation.phone ||
      !profileInformation.address
    ) {
      alert("Please fill all the data.");
      return false;
    }

    if (
      profileInformation.fname.length < 1 ||
      profileInformation.lname.length < 1 ||
      profileInformation.address.length < 1
    ) {
      alert("Please fill all the data.");
      return false;
    }

    if (
      profileInformation.phone.length !== 10 &&
      profileInformation.phone.length !== 12
    ) {
      alert("Enter a valid phone number.");
      return false;
    }

    if (words.length < 10) {
      alert("Enter a minimum of 10 words in the overview.");
      return false;
    }

    return true;
  };

  const validateEducationDetails = () => {
    if (!educationInfo) return false;
    const Data = educationInfo;
    for (let i = 0; i < Data.length; i++) {
      const instance = Data[i];
      if (
        !instance.courseName ||
        !instance.completionYear ||
        !instance.college ||
        !instance.percentage
      ) {
        alert("Please fill all the data");
        return false;
      }

      if (
        instance.courseName.length < 1 ||
        instance.completionYear.length != 4 ||
        instance.college.length < 1 ||
        instance.percentage.length < 1
      ) {
        alert("Incomplete or invalid data");
        return false;
      }
    }

    return true;
  };

  const validateExperienceDetails = () => {
    if (!experienceInfo) return false;
    const Data = experienceInfo;
    for (let i = 0; i < Data.length; i++) {
      const instance = Data[i];
      if (
        !instance.jobtitle ||
        !instance.employer ||
        !instance.startdate ||
        !instance.enddate
      ) {
        alert("Please fill all the data");
        return false;
      }

      if (
        instance.jobtitle.length < 1 ||
        instance.employer.length < 1 ||
        instance.startdate.length < 10 ||
        instance.enddate.length < 10
      ) {
        alert("Incomplete or invalid data");
        return false;
      }
    }

    return true;
  };

  const validateSkills = () => {
    console.log(skillInfo.length);
    if (skillInfo.length < 1) {
      alert("Please enter your skill");
      return false;
    }
    for (let i = 0; i < skillInfo.length; i++) {
      console.log(skillInfo[i]);
      if (!skillInfo[i] || (skillInfo[i] && skillInfo[i].length < 1)) {
        alert("Please fill all skills");
        return false;
      }
    }
    return true;
  };

  const validateSocialLinks = () => {
    if (socialInfo.length < 1) {
      alert("Please enter your social url");
      return false;
    }
    for (let i = 0; i < socialInfo.length; i++) {
      if (!socialInfo[i] || (socialInfo[i] && socialInfo[i].length < 1)) {
        alert("Please fill all urls");
        return false;
      }
    }
    return true;
  };



  const handleComplete = () => {
    let flag = true;
    console.log(activeStep);
    const action = getSteps()[activeStep];

    if (action == "Profile Section") {
      flag = ValidateProfileDetails();
      console.log("Profile Section ", flag);
    } else if (action == "Experience") {
      flag = validateExperienceDetails();
      console.log("Experience ", flag);
    } else if (action == "Education Section") {
      flag = validateEducationDetails();
      console.log("Education Section ", flag);
    } else if (action == "Skills Sector") {
      console.log("Skills Sector ", flag);
      flag = validateSkills();
    } else if (action == "Social") {
      flag = validateSocialLinks();
      console.log("Social ", flag);
    }

    if (flag) {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    }
  };

  const handleEdit = () => {
    setCompleted({});
    setActiveStep(0);
  };
  return (
    <div className="root">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Link to={step.path}>{step.label}</Link>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Routes>
        {steps.map((step, index) => (
          <Route key={index} path={step.path} element={step.element} />
        ))}
      </Routes>
      <div>
      {allStepsCompleted() ? (
          <div>
            <Typography className="instructions">
              All steps completed - your resume is ready!!
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleEdit}>Edit</Button>
            <Resume />
          </div>
        ) : (
          <div>
            <Typography className="instructions">
              {steps[activeStep].component}
            </Typography>
            <div className="navigation-buttons">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="button"
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
                className="button"
              >
                Next
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleComplete}
              >
                {completedSteps() === totalSteps() - 1
                  ? "Finish"
                  : "Save and Continue"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
