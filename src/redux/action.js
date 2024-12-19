import {
  PROFILE,  
  EXPERIENCE,
  MODIFY_EXPERIENCE_COUNT,
  EDUCATION,
  MODIFY_COUNT,
  SKILLS,  
  MODIFY_SKILLS_COUNT,
  SOCIALS,
  MODIFY_SOCIAL_COUNT,
} from "./actionTypes";

export const handleProfileAction = (data) => ({
  type: PROFILE,
  payload: data,
});

export const handleExperienceAction = (data) => ({
  type: EXPERIENCE,
  payload: data,
});
export const modifyExperienceCountAction = (data) => ({
  type: MODIFY_EXPERIENCE_COUNT,
  payload: data,
});

export const handleEducationAction = (data) => ({
  type: EDUCATION,
  payload: data,
});
export const modifyEducationCountAction = (count) => ({
  type: MODIFY_COUNT,
  payload: count,
});

export const handleSkillAction = (data) => ({
  type: SKILLS,
  payload: data,
});
export const modifySkillCountAction = (count) => ({
  type: MODIFY_SKILLS_COUNT,
  payload: count,
});

export const handleSocialAction = (data) => ({
  type: SOCIALS,
  payload: data,
});
export const modifySocialCountAction = (count) => ({
  type: MODIFY_SOCIAL_COUNT,
  payload: count,
});
