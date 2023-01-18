import Head from "next/head";
import Header_page from "../components/header_page";
import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <Head>
        <title>Quinchon Evan - Portfolio</title>
        <link rel="icon" href="/accueil/panda.ico" />
      </Head>
      <Header_page />
      <div className={styles.timeline}>
        <div className={styles.container_left}>
          <div className={styles.content}>
            <h2>2016</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.content}>
            <h2>2017</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className={styles.container_left}>
          <div className={styles.content}>
            <h2>2018</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.content}>
            <h2>2019</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className={styles.container_left}>
          <div className={styles.content}>
            <h2>2020</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.content}>
            <h2>2021</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
