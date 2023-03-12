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
        <h1 className={styles.titre}>
          Code Camp
          <br />
          Mission Emargement
        </h1>
        <h3 className={styles.sous_titre}>
          La mission de ce Code Camp était de créer une application qui
          permettrait de simplifier et d'automatiser les émargements des
          étudiants. Le choix des technologies étaient libres tant que notre
          application pouvait fonctionner sur IOS. Pour cela mon équipe et moi
          avons décidé d'utiliser Flutter. Temps: 2 semaine
        </h3>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img
              className={styles.image_theForge}
              src="/projet/CC Fluter/form.png"
            />
          </div>
          <div className={styles.right}>
            <h3>Page de connexion</h3>
            <p>
              Vu que notre application était destinée au cadre scolaire de
              L'ETNA, il fallait que seuls les étudiants ou les professeurs
              puissent se connecter et donc nous avons mis en place une
              vérification pour savoir si le login et le mot de passe
              correspondait à une personne de l'ETNA et regarder si cette
              personne était admin ou étudiant.
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Page de l'Historique</h3>
            <p>
              Lorsque l'on se connecte en tant qu'Admin, nous avons accès aux
              historiques des émargements de la matinéé/soirée.Sur cette image
              nous ne voyons que du rouge vu que je ne possède pas les cartes
              des autres étudiant, mais si un élève est émargé, cette icône se
              transforme en vert. Avec plus de temps, nous comptions ajouter
              l'icône jaune pour retard avec une possibilité de justifier une
              absence ou un retard.
            </p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image_theForge}
              src="/projet/CC Fluter/history.png"
            />
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <img
              className={styles.image_theForge}
              src="/projet/CC Fluter/Scanner.jpg"
            />
          </div>
          <div className={styles.right}>
            <h3>Page du Scanner</h3>
            <p>
              Le Scanner permet de s'émarger en passant simplement le Qr code de
              la carte devant. L'accès est bien évidemment réservé aux admins
              sauf si un émargement est créé en distanciel.
            </p>
          </div>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.left}>
            <h3>Page des Promos</h3>
            <p>
              La page promo permet de créer des émargements pour une promo. Il y
              a une case à cochet si l'émargement est en distanciel. S'il l'est,
              la page scanner s'affichera pour les étudiants de la promo en
              question. Lorsque l'on clique sur un étudiant, une page s'ouvre
              avec les informations de l'étudiant et son historique
              d'émargement. Les étudiants eux ne verront que leur information à
              la connexion.
            </p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image_theForge}
              src="/projet/CC Fluter/Promo.png"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HyrulePage;
