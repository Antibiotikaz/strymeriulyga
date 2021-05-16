import * as types from "../../type";
import axios from "axios";

export const getAllUsersAdmin = () => async (dispatch) => {
  try {
    const responseData = await axios.get(`${types.url}/admin/getUsers`);
    dispatch({
      type: types.GET_ALL_USERS_ADMIN,
      payload: responseData.data.users,
    });
  } catch (err) {
    console.log(err);
  }
};

export const verifyUser = (body) => async (dispatch) => {
  try {
    await axios.put(`${types.url}/admin/verify`, body);
    dispatch({
      type: types.VERIFY_USER,
    });
    dispatch(getAllUsersAdmin());
  } catch (err) {
    console.log(err);
  }
};
