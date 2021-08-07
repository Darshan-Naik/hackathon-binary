import { loadData, saveData } from "../../Utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

const init = loadData("user") || {
  isAuth: false,
  user: {},
  isError: false,
  isLoading: false,
  errorMessage: "",
};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    }
    case LOGIN_SUCCESS: {
      const updatedSate = {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        errorMessage: "",
        user: payload,
      };
      saveData("user", updatedSate);
      return updatedSate;
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    }
    case REGISTER_SUCCESS: {
      const updatedSate = {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        errorMessage: "",
        user: payload,
      };
      saveData("user", updatedSate);
      return updatedSate;
    }
    case LOGOUT: {
      const updatedSate = {
        isAuth: false,
        user: {},
        isError: false,
        isLoading: false,
        errorMessage: "",
      };
      saveData("user", updatedSate);
      return updatedSate;
    }
    default:
      return state;
  }
};
