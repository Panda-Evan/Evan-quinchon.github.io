import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Projet.module.css";

// page project hyrule
function Rest() {
  return (
    <>
      <Head>
        <title>Quinchon Evan - Portfolio</title>
        <link rel="icon" href="/accueil/panda.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.titre}>Rest Countries</h1>
        <h3 className={styles.sous_titre}>
          Le but était de créer une appli en Kotlin qui récupérait depuis une
          Database des infos sur de nombreux pays et de les utiliser. Temps: 2
          semaines
        </h3>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img
              className={styles.image_theForge}
              src="/projet/rest/pays_list.jpg"
            />
          </div>
          <div className={styles.right}>
            <h3>Page de selection</h3>
            <p>
              Sur cette page sont affichés tous les pays de la Database, ils
              sont cliquables pour nous emmener sur la deuxième page.
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Page d'information</h3>
            <p>
              Sur cette page sont affichées plusieurs informations du pays
              sélectionné. Il faut savoir que si l'information n'existe pas ,
              l'information ne sera pas affichée. En cliquant sur "Go to the
              maps", cela ouvre une page Google Maps avec la localisation du
              pays.
            </p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image_theForge}
              src="/projet/rest/pays_info.jpg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Rest;
