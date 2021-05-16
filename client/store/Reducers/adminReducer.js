import * as types from "../type";
const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_USERS_ADMIN:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
