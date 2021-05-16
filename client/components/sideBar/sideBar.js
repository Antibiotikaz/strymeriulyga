import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import {
  openForm,
  closeForm,
} from "../../store/Actions/registrationFormAction";
import { useDispatch, useSelector } from "react-redux";
export default (props) => {
  const isOpened = useSelector((state) => state.general.registrationForm);
  const dispatch = useDispatch();
  const open = () => {
    if (!isOpened) {
      dispatch(openForm());
    } else {
      dispatch(closeForm());
    }
  };
  return (
    // Pass on our props
    <Menu {...props}>
      <ul>
        <li>
          <Link to="streamsID" smooth={true} duratio={2000}>
            Strymeriai
          </Link>
        </li>

        <Link
          onClick={() => open()}
          to="registerID"
          smooth={true}
          duratio={2000}
        >
          Registruok savo kanalą
        </Link>
        <li>
          <Link to="contactID" smooth={true} duratio={2000}>
            Kontaktai
          </Link>
        </li>
      </ul>
    </Menu>
  );
};
