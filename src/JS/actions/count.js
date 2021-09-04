import { INCREMENT } from "../constants/count";


export const increment = () => {
  return {
    type: INCREMENT,
  };
};