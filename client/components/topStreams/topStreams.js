import classes from "../../styles/topStreams.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../pages/api/api";
import Modal from "react-modal";
import ModalStream from "../modalStream/modalStream";
Modal.defaultStyles.content.backgroundColor = "#100b19";
Modal.defaultStyles.content.width = "85%";
Modal.defaultStyles.content.margin = "0 auto";
export default function Streamers() {
  const users = useSelector((state) => state.users.users);
  const [modalStreamer, setModalStreamer] = useState();
  const [open, setOpen] = useState(false);
  const [live, setLive] = useState([]);
  // const parentURL = "localhost";
  const parentURL = "strymeriulyga.lt";

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
  let filteredArray = [];
  filteredArray = live.filter(function (element) {
    return element !== undefined;
  });

  function findIndicesOfMax(inp, count) {
    var outp = [];
    for (var i = 0; i < inp.length; i++) {
      outp.push(i); // add index to output array
      if (outp.length > count) {
        outp.sort(function (a, b) {
          return inp[b].viewer_count - inp[a].viewer_count;
        }); // descending sort the output array
        outp.pop(); // remove the last index (index of smallest element in output array)
      }
    }
    return outp;
  }

  var indices = findIndicesOfMax(filteredArray, 3);
  const top3 = [];

  for (var i = 0; i < indices.length; i++) {
    top3.push(filteredArray[indices[i]]);
  }

  return (
    <div className={classes.topStreams}>
      <h1 className={classes.Title}>Top transliacijos</h1>

      {top3.map((account, index) => {
        return (
          <div onClick={() => openModal(account)}>
            <h1>{account.user_login}</h1>
            <iframe
              className={classes.live}
              src={`https://player.twitch.tv/?channel=${account.user_login}&parent=${parentURL}&muted=true`}
              allowFullScreen={true}
              key={index}
            ></iframe>
          </div>
        );
      })}
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
  );
}
