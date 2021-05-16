import Head from "next/head";
import classes from "../styles/Home.module.scss";
import Navigation from "../components/navigation/navigation";
import { useSelector } from "react-redux";
import Register from "../components/register/register";
import Streamers from "../components/streamers/streamers";
import TopStreams from "../components/topStreams/topStreams";
import Contact from "../components/contacts/contact";
import SideBar from "../components/sideBar/sideBar";
export default function Home() {
  const openForm = useSelector((state) => state.general.registrationForm);

  return (
    <div className={classes.container}>
      <Head>
        <title>Strymeriu Lyga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main} id="App">
        <div className={classes.burger}>
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </div>
        <Navigation id="page-wrap" />
        <div className={classes.belowNav}>
          <TopStreams />
          <div className={classes.Form} id="registerID">
            {openForm ? <Register /> : null}
          </div>
        </div>
      </main>
      <Streamers />
      <Contact />
    </div>
  );
}
