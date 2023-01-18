import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import En_tete from "../components/en-tete";
import Footer from "../components/footer";
import Aboutme from "../components/aboutme";
import Comp from "../components/comp";
import Project from "../components/project-vue";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="alternance, programation, etna" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="author"
          content="Evan Quinchon, quinch_e@etna-alternance.net"
        />
        <title>Quinchon Evan - Portfolio</title>
        <link rel="icon" href="./accueil/panda.ico" />
      </Head>
      <Header />
      <En_tete />

      <Aboutme />
      <Comp />
      <Project />

      <Footer />
    </>
  );
}
