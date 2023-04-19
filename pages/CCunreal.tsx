import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Projet.module.css";

// page project hyrule
function Unreal() {
  return (
    <>
      <Head>
        <title>Quinchon Evan - Portfolio</title>
        <link rel="icon" href="/accueil/panda.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.titre}>Mission: Escape Lab</h1>
        <h3 className={styles.sous_titre}>
          Le but était de créer un jeu dans un temps assez court avec une
          technologie nouvelle (pour beaucoup). Nous avons donc commencé à créer
          notre jeu avec Unreal Engine 5.1 en utilisant BluePrint par manque de
          temps. Temps: 1 semaine
        </h3>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img
              className={styles.image_theForge}
              src="/projet/CC unreal/Parcours1.png"
            />
          </div>
          <div className={styles.right}>
            <h3>Parcours 1</h3>
            <p>
              Apres avoir cliqué sur play, on Spawn dans un laboratoire où l'on
              trouvera plusieurs portails nous emmenant dans des zones
              différentes. Ceci est le premier parcours assez simple avec une
              ambiance
              <a
                href="https://www.marmiton.org/recettes/recette_iles-flottantes_22034.aspx"
                target="_blank"
              >
                {" "}
                ile flottante
              </a>
              .
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Parcours 2</h3>
            <p>
              Ceci est un autre parcours un peu plus complexe que le premier
              avec une ambiance sombre dans un environement scientifique.
            </p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image_theForge}
              src="/projet/CC unreal/Parcours3.png"
            />
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img
              className={styles.image_theForge}
              src="/projet/CC unreal/Parcours2.png"
            />
          </div>
          <div className={styles.right}>
            <h3>Parcours 3</h3>
            <p>
              Ceci est le dernier parcours, plus difficile que les deux autres,
              dans une atmosphère volcanique. Dans ce level il y a un premier
              Easter Egg.
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Enigme</h3>
            <p>
              Ceci est la seule énigme de notre jeu, dans une salle de
              laboratoire avec une ambiance à la professeur Layton.
            </p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image_theForge}
              src="/projet/CC unreal/Riddle1.png"
            />
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img
              className={styles.image_theForge}
              src="/projet/CC unreal/Search1.png"
            />
          </div>
          <div className={styles.right}>
            <h3>Recherche</h3>
            <p>
              Ceci est le level de recherche, le but est donc de trouver des
              objets dans une vaste map. Dans ce level il y a aussi un deuxième
              Easter Egg.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Unreal;
