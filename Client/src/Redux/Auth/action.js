import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export const registerRequest = (payload) => {
  return {
    type: REGISTER_REQUEST,
    payload,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

export const registerFailure = (payload) => {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
};
