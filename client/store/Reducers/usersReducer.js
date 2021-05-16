import * as types from "../type";
const initialState = {
  users: [],
  succes: false,
  error: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case types.SUCCESS_REGISTER:
      return {
        ...state,
        succes: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
