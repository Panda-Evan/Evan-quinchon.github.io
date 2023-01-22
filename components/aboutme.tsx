import styles from "../styles/Aboutme.module.css";

// About me on the home
function Aboutme() {
  return (
    <div className={styles.div} id="about">
      <text>A propos</text>
      <p>
        Développeur passionné de jeux vidéo, je suis actuellement en 1ère année
        à l’ETNA.
        <br />
        <br />
        Je m'intéresse à la création de site et particulièrement sur le côté
        esthétique de celui-ci. J'ai aussi un petit intérêt sur les jeux vidéo,
        notamment les RPGs et les jeux d'évasions. Je cherche à me perfectioner
        toujours plus.
      </p>
      <a href="/about">
        <button>En savoir plus</button>
      </a>
    </div>
  );
}

export default Aboutme;
