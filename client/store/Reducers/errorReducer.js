import * as types from "../type";
const initialState = {
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
