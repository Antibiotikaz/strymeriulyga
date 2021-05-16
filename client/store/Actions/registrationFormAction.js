import * as types from "../type";

export const openForm = () => async (dispatch) => {
  dispatch({
    type: types.OPEN_REGISTER_FORM,
    payload: true,
  });
};

export const closeForm = () => async (dispatch) => {
  dispatch({
    type: types.CLOSE_REGISTER_FORM,
    payload: false,
  });
};
