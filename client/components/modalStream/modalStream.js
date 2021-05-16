import classes from "../../styles/modalStream.module.scss";
import moment from "moment";
export default function ModalStream(stream) {
  console.log(stream, "STRYm");
  const liveStream = stream.stream;
  // const parentURL = "localhost";
  const parentURL = "strymeriulyga.lt";
  const startDate = moment(liveStream.started_at).format("llll");
  return (
    <div className={classes.ModalStream}>
      <div className={classes.video}>
        <div className={classes.descriptionBox}>
          <div>
            <h1 className={classes.title}>
              Transliuoja: {liveStream.user_name}
            </h1>
          </div>
          <div>
            <h1>Žaidžia: {liveStream.game_name}</h1>
          </div>
        </div>
        <div className={classes.Iframe}>
          <iframe
            className={classes.live}
            src={`https://player.twitch.tv/?channel=${liveStream.user_login}&parent=${parentURL}&muted=true`}
            allowFullScreen={true}
          ></iframe>
          <iframe
            className={classes.chat}
            id="chat_embed"
            src={`https://www.twitch.tv/embed/${liveStream.user_login}/chat?parent=${parentURL}`}
          ></iframe>
        </div>

        <div className={classes.InfoBox}>
          <div className={classes.info}>
            <h1>{liveStream.title}</h1>
            <h1>Žiurovai: {liveStream.viewer_count}</h1>
          </div>
          <div>
            <h1>Prasidėjo: {startDate}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
