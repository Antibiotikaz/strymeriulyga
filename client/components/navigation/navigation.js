import { Link } from "react-scroll";
import classes from "../../styles/navigation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  openForm,
  closeForm,
} from "../../store/Actions/registrationFormAction";
import { slide as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navigation() {
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
    <div className={classes.Nav}>
      <div className={classes.logo}>
        <img src="/sl.png" />
      </div>
      <div className={classes.NavBar}>
        <ul>
          <li>
            <Link to="streamsID" smooth={true} duratio={2000}>
              Strymeriai
            </Link>
          </li>
          <li onClick={() => open()}>Registruok savo kanalą</li>
          <li>
            <Link to="contactID" smooth={true} duratio={2000}>
              Kontaktai
            </Link>
          </li>
        </ul>

        <div className={classes.burger}></div>
      </div>
    </div>
  );
}
