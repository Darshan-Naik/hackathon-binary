
import { GET_CATEGORY } from "./actionType";

const init = {
  category: [],
};

export const appReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY: {
      return {
        ...state,
        category: payload,
      };
    }
    default:
      return state;
  }
};
