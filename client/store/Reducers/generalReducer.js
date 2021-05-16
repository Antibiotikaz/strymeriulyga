import * as types from "../type";
const initialState = {
  registrationForm: false,
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_REGISTER_FORM:
      return {
        ...state,
        registrationForm: action.payload,
      };
    case types.CLOSE_REGISTER_FORM:
      return {
        ...state,
        registrationForm: action.payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
