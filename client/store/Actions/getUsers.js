import * as types from "../type";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    const responseData = await axios.get(`${types.url}/users/getUsers`);
    dispatch({
      type: types.GET_USERS,
      payload: responseData.data.users,
    });
  } catch (err) {
    console.log(err);
  }
};
