import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header_page";
import styles from "../styles/Projet.module.css";

function TheForgePage() {
  return (
    <>
      <Head>
        <title>Quinchon Evan - Portfolio</title>
        <link rel="icon" href="/accueil/panda.ico" />
      </Head>
      <Header />
      <main>
        <h1 className={styles.titre}>Hyrule Castle</h1>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img className={styles.image_theForge} src="/projet/theForge/theForge.png" />
          </div>
          <div className={styles.right}>
            <h3>Page de Lancement du Jeu</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              eligendi ea iste voluptate fugiat nostrum dolorum, debitis eius
              alias ullam consectetur beatae, odit, quia modi aut placeat
              molestiae error provident eveniet? Ex sunt quasi, cupiditate
              consectetur natus veniam ducimus amet ea hic culpa? Quasi dolorum
              odio ad suscipit accusamus vero.
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Page de Lancement du Jeu</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              eligendi ea iste voluptate fugiat nostrum dolorum, debitis eius
              alias ullam consectetur beatae, odit, quia modi aut placeat
              molestiae error provident eveniet? Ex sunt quasi, cupiditate
              consectetur natus veniam ducimus amet ea hic culpa? Quasi dolorum
              odio ad suscipit accusamus vero.
            </p>
          </div>
          <div className={styles.right}>
            <img className={styles.image_theForge} src="/projet/theForge/theForge_shop.png" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TheForgePage;
