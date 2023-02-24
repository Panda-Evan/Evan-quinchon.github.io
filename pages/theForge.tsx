import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Projet.module.css";

// page project The Forge
function TheForgePage() {
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
              src="/projet/theForge/theForge.png"
            />
          </div>
          <div className={styles.right}>
            <h3>Page d'accueil</h3>
            <p>
              La page d'accueil possède le titre du site ainsi qu'une
              description et un gif dans une image. La barre de navigation est
              classique mais permet de savoir où l'on se situe sur le site grâce
              aux actives.
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Page du shop</h3>
            <p>
              La page du shop est reliée à une database permettant de récupérer les articles mis en vente sur le site rangé par catégorie.
              Les 4 images du haut permettent de se déplacer suivant le thème voulu.
            </p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image_theForge}
              src="/projet/theForge/theForge_shop.png"
            />
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img
              className={styles.image_theForge}
              src="/projet/theForge/theForge_pay.png"
            />
          </div>
          <div className={styles.right}>
            <h3>Page de payement</h3>
            <p>
              La page permet de récupérer les articles commandés dans le shop et récupère les données.
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Page de connexion</h3>
            <p>
              La page permet de se connecter ou de se créer un compte suivant si l'on possède un compte ou non.
            </p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image_theForge}
              src="/projet/theForge/theForge_account.png"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TheForgePage;
