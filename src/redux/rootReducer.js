import {
  CLEAR_PROFILE,
  PROFILE,
  EXPERIENCE,
  CLEAR_EXPERIENCE,
  EDUCATION,
  MODIFY_COUNT,
  CLEAR_EDUCATION,
  SKILLS,
  CLEAR_SKILLS,
  MODIFY_SKILLS_COUNT,
  SOCIALS,
  MODIFY_SOCIAL_COUNT,
  CLEAR_SOCIALS,
  MODIFY_EXPERIENCE_COUNT,
} from "./actionTypes";
export default (store = {}, action) => {
  console.log("Inside Reducer", action.payload);
  switch (action.type) {
    case PROFILE:
      return {
        ...store,
        profileData: action.payload,
      };
    case CLEAR_PROFILE:
      return store;
    case EXPERIENCE:
      return {
        ...store,
        experienceData: action.payload,
      };
      case MODIFY_EXPERIENCE_COUNT :
      return {
        ...store,
        experienceCount: action.payload,
      };
    case EDUCATION:
      return {
        ...store,
        educationData: action.payload,
      };
    case MODIFY_COUNT:
      return {
        ...store,
        educationCount: action.payload,
      };
    case SKILLS:
      return {
        ...store,
        skillData: action.payload,
      };
    case MODIFY_SKILLS_COUNT:
      return {
        ...store,
        skillCount: action.payload,
      };
    case SOCIALS:
      return {
        ...store,
        socialData: action.payload,
      };
    case MODIFY_SOCIAL_COUNT:
      return {
        ...store,
        socialCount: action.payload,
      };
    case CLEAR_PROFILE:
      return {};
    case CLEAR_EXPERIENCE:
      return {};
    case CLEAR_EDUCATION:
      return {};
    case CLEAR_SKILLS:
      return {};
      case CLEAR_SOCIALS:
      return {};
    default:
      return store;
  }
};
