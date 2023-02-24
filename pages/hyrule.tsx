import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Projet.module.css";

// page project hyrule
function HyrulePage() {
  return (
    <>
      <Head>
        <title>Quinchon Evan - Portfolio</title>
        <link rel="icon" href="/accueil/panda.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.titre}>Hyrule Castle</h1>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img
              className={styles.image_theForge}
              src="/projet/hyrule/zelda_accueil.png"
            />
          </div>
          <div className={styles.right}>
            <h3>Page de Lancement du Jeu</h3>
            <p>
              Le titre est fait grâce à une fonction typescript qui transforme
              le texte en ascii suivant des paramètres. Le menu est fait de
              manière à choisir en entrant 1 ou 2 suivants ce qu'on souhaite
              faire.
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Page de Jeu</h3>
            <p>
              Lorsque l'on choisit new game, on peut choisir le nombre d'étages
              à parcourir avant la fin du jeu. On choisit aussi la difficulté
              qui augmente la vie et la force des ennemies. On en
              vient donc à notre image qui est le commencement du jeu. Le héros
              est choisi aléatoirement tout comme les ennemies. Tous les 10
              combats, le héros affrontera un boss.
            </p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image_theForge}
              src="/projet/hyrule/zelda_game.png"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HyrulePage;
