import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./actionTypes";

const init = {
  user: null,
  errors: null,
  loading: false,
  isAuth: false,
  token: localStorage.getItem("token"),
};

const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    // Registration
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        user: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    // Login

    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        isAuth: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
