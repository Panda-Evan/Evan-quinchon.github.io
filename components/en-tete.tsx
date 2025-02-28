import styles from "../styles/En_tete.module.css";

// the presentation header
function En_tete() {
  return (
    <div className={styles.div}>
      <div className={styles.div_left}>
        <img src="/accueil/photo.jpg" alt="photo de profil" />
      </div>
      <div className={styles.div_right}>
        <h1>
          Bonjour ! Je suis <br />
          <strong>Evan Quinchon</strong>
        </h1>
        <br />
        <div className={styles.intro}>
          <p>
            Je suis une personne motivée et dynamique, toujours prête à relever
            de nouveaux défis et à apprendre de nouvelles choses. Je suis
            persuadé que je pourrais apporter une valeur ajoutée à votre équipe.
          </p>
        </div>
        <div>
          <button className={styles.download}>
            <span>
              <a href="/accueil/CV_QUINCHON_EVAN.pdf" download>
                <img src="/accueil/download.png" />
                Download CV
              </a>
            </span>
          </button>
        </div>
      </div>
      <img className={styles.svg} src="/wave/wave.svg" />
    </div>
  );
}

export default En_tete;
