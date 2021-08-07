import { GET_CATEGORY } from "./actionType";

export const getCategory = (payload) => {
  return {
    type: GET_CATEGORY,
    payload,
  };
};
