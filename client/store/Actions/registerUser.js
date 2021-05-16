import * as types from "../type";
import axios from "axios";
import { getUsers } from "../Actions/getUsers";
export const registerUser = (body) => async (dispatch) => {
  try {
    axios
      .post(`${types.url}/users/register`, body)
      .then((res) => {
        console.log(res, "RES");
        dispatch({
          type: types.REGISTER_USER,
          payload: res.data,
        });
        dispatch(getUsers());
        dispatch(registerSucces());
      })
      .catch((err) =>
        dispatch({
          type: types.REGISTER_ERROR,
          payload: err.response.data,
        })
      );
  } catch (err) {
    console.log(err.response, " KOKS RESPONSE ERROR");
  }
};

export const registerSucces = () => async (dispatch) => {
  try {
    dispatch({
      type: types.SUCCESS_REGISTER,
      payload: true,
    });
  } catch (err) {
    console.log(err);
  }
};
