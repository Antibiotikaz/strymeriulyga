import classes from "../../styles/register.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeForm } from "../../store/Actions/registrationFormAction";
import { useState } from "react";
import { registerUser } from "../../store/Actions/registerUser";
import React, { useEffect, useRef } from "react";
import { FaUpload } from "react-icons/fa";
import emailjs from "emailjs-com";
export default function Register() {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.users.succes);
  const error = useSelector((state) => state.error.error);
  console.log(error, "KOKS ERROR?");
  const close = () => {
    dispatch(closeForm());
  };
  const [email, setEmail] = useState();
  const [twitchAccount, setTwitchAccount] = useState();
  const [file, setFile] = useState();
  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("twitchAccount", twitchAccount);
    formData.append("file", file);
    dispatch(registerUser(formData));
  };

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_hnvl2ml",
  //       "template_wmp0mki",
  //       e.target,
  //       "user_aiCBDLR5ui78xt0ZHLk9c"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  // const node = useRef();
  // useEffect(() => {
  //   // add when mounted
  //   document.addEventListener("mousedown", handleClick);
  //   // return function to be called when unmounted
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  // const handleClick = (e) => {
  //   if (node.current.contains(e.target)) {
  //     // inside click
  //     return;
  //   }
  //   // outside click
  //   dispatch(closeForm());
  // };
  return (
    <div className={classes.Register}>
      <div className={classes.form}>
        <form onSubmit={submit}>
          <p onClick={() => close()}>X</p>
          <label>Kanalo registracijos forma</label>
          <label>Jūsų email</label>
          <input
            placeholder="Email"
            name="email"
            type="text"
            required
            onChange={(event) => {
              const { value } = event.target;
              setEmail(value);
            }}
          />
          {error.errorStatus === 1 ? (
            <label className={classes.error}>
              Toks E.paštas jau egzistuoja
            </label>
          ) : null}
          <label>Jūsų Twitch slapyvardis</label>
          <input
            placeholder="Twitch Account"
            name="twitchAccount"
            type="text"
            required
            onChange={(event) => {
              const { value } = event.target;
              setTwitchAccount(value);
            }}
          />
          <label>Įkelkite savo logo</label>
          <label for="file-upload" className={classes.upload}>
            <FaUpload size="2em" /> Logo dydis iki 2mb
          </label>
          <input
            id="file-upload"
            required
            type="file"
            name="file"
            accept=".jpg"
            onChange={(event) => {
              const file = event.target.files[0];
              setFile(file);
            }}
          />
          {error.errorStatus === 2 ? (
            <label className={classes.error}>Failo dydis per didelis</label>
          ) : null}
          <button type="submit">Registruok kanalą</button>
          {success ? (
            <div className={classes.success}>
              <img src="/success.png" />
              <h1>
                Sėkmingai užregistravote kanalą! <br />
                Jūsų kanalas bus aktyvuotas per 24h
              </h1>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
