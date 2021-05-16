import { useSelector, useDispatch } from "react-redux";
import { getAllUsersAdmin } from "../store/Actions/admin/adminActions";
import classes from "../styles/controlPanel.module.scss";
import { verifyUser } from "../store/Actions/admin/adminActions";
import { useRouter } from "next/router";
import * as types from "../store/type";
import { useEffect } from "react";
export default function ControlPanel() {
  const users = useSelector((state) => state.admin.users);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAdmin());
  }, []);
  const verifyOnClick = (userID, isVerified) => {
    const body = {
      userID,
      isVerified,
    };
    dispatch(verifyUser(body));
    router.reload();
  };
  console.log(users, "USERS IN ADMIN");
  return (
    <div className={classes.Panel}>
      <ul>
        {users.map((user, index) => {
          if (!user.isVerified) {
            return (
              <div className={classes.userBox} key={index}>
                <div>
                  <li>Strymerio username: {user.twitchAccount}</li>
                  <img src={`${types.url}/assets/images/${user.image}`} />
                  {user.isVerified ? (
                    <h2>Status : Verified</h2>
                  ) : (
                    <h2>Status : Pending</h2>
                  )}
                </div>

                <div>
                  <button onClick={() => verifyOnClick(user._id, true)}>
                    Verify
                  </button>
                </div>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
