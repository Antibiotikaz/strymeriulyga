import React, { useState } from "react";
import emailjs from "emailjs-com";

import classes from "../../styles/contact.module.scss";

export default function Contacts() {
  const [isSent, setIsSent] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hnvl2ml",
        "template_xi5cyyg",
        e.target,
        "user_aiCBDLR5ui78xt0ZHLk9c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={classes.Contact} id="contactID">
      <div className={classes.contactBox}>
        <div className={classes.form}>
          <form onSubmit={sendEmail}>
            <div className={classes.firstField}>
              <input
                name="twitchAccount"
                placeholder="Twitch paskyra"
                required
              />
              <input name="email" placeholder="Elektroninis paštas" required />
            </div>
            <div className={classes.secondField}>
              <textarea placeholder="Jūsų komentaras" name="message" required />
            </div>
            <div className={classes.ThirdField}>
              <button type="Submit">Siųskite formą</button>
              {isSent ? (
                <div className={classes.success}>
                  <img src="/success.png" />
                  <h1>Forma sėkmingai išsiųsta</h1>
                </div>
              ) : null}
            </div>
          </form>
        </div>
        <div className={classes.description}>
          <h1>Susisiekite su mumis jeigu:</h1>
          <ul>
            <li>Iškilo problemų registruojant kanalą</li>
            <li>Norite išregistruoti kanalą</li>
            <li>
              Pastebėjus toksišką ar žmogaus orumą žeminanti transliuotoją
            </li>
            <li>Plėtros klausimais</li>
            <li>Bendradarbiavimo klausimais</li>
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        <span>Visos teisės saugomos strymeriulyga.lt</span>
      </div>
    </div>
  );
}
