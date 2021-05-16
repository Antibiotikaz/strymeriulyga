import classes from "../../styles/streamers.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../pages/api/api";
import { MdLiveTv } from "react-icons/md";
import Modal from "react-modal";
import ModalStream from "../modalStream/modalStream";
Modal.defaultStyles.content.backgroundColor = "#100b19";
Modal.defaultStyles.content.width = "85%";
Modal.defaultStyles.content.margin = "0 auto";
import * as types from "../../store/type";
export default function Streamers() {
  const users = useSelector((state) => state.users.users);

  const [live, setLive] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalStreamer, setModalStreamer] = useState();
  const style = {
    color: "red",
    float: "right",
    cursor: "pointer",
  };
  const openModal = (user) => {
    if (!open) {
      setModalStreamer(user);
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  useEffect(() => {
    const initialize = async () => {
      const results = await Promise.all(
        users.map((item) => {
          return (
            api
              .get(
                `https://api.twitch.tv/helix/streams?&user_login=${item.twitchAccount}`
              )
              //replace above line with your axios call
              .then((res) => {
                return res.data.data[0];
              })
              .catch((error) => {
                console.log(error);
              })
          );
        })
      );
      setLive(results);
    };

    initialize();
  }, [users]);

  let liveStreams = [];
  liveStreams = live.filter(function (element) {
    return element !== undefined;
  });

  let sortedLiveStreams = liveStreams.sort(function (a, b) {
    return b.viewer_count - a.viewer_count;
  });

  for (let index = 0; index < 3; index++) {
    sortedLiveStreams.shift();
  }

  return (
    <div className={classes.Streamers} id="streamsID">
      <h1>Strymai</h1>
      {/* LIVE STREAMS */}
      <div className={classes.Live}>
        <h1>
          <MdLiveTv color="red" /> Live
        </h1>
        <div className={classes.flexBox}>
          {sortedLiveStreams.map((user, index) => {
            console.log(user, "user");
            return (
              <div className={classes.stream} key={index}>
                <a onClick={() => openModal(user)}>
                  <img
                    className={classes.streamLogo}
                    key={index}
                    src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${user.user_login}-350x220.jpg`}
                  />
                  <h2>{user.user_name}</h2>
                  <h2>Žiurovai :{user.viewer_count}</h2>
                </a>
              </div>
            );
          })}
        </div>
        <Modal
          isOpen={open}
          onRequestClose={() => openModal()}
          ariaHideApp={false}
        >
          <p style={style} onClick={() => openModal()}>
            X
          </p>
          <ModalStream stream={modalStreamer} />
        </Modal>
      </div>
      {/* ALL STREAMS */}
      <div className={classes.All}>
        <h1>Visi strymeriai</h1>
        <div className={classes.flexBox}>
          {users.map((user, index) => {
            return (
              <div className={classes.stream} key={index}>
                <a
                  href={`https://www.twitch.tv/${user.twitchAccount}`}
                  target="_blank"
                >
                  <img
                    className={classes.streamLogo}
                    key={index}
                    src={`${types.url}/assets/images/${user.image}`}
                  />
                  <h2>{user.twitchAccount}</h2>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
