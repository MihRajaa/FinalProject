import { REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./ActionTypes";

const init = {
  user: null,
  errors: null,
  loading: false,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
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

    default:
      return state;
  }
};

export default reducer;
