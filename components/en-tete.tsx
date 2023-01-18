import styles from "../styles/En_tete.module.css";

function En_tete() {
  return (
    <div className={styles.div}>
      <div className={styles.div_left}>
        <img src="/accueil/photo.jpg" alt="photo de profil" />
      </div>
      <div className={styles.div_right}>
        <text>
          Bonjour ! Je suis <br />
          <strong>Evan Quinchon</strong>
        </text>
        <br />
        <div className={styles.intro}>
          <p>
            Je suis une personne motivée et dynamique, toujours prête à relever
            de nouveaux défis et à apprendre de nouvelles choses. Je suis
            persuadé que je pourrais apporter une valeur ajoutée à votre équipe.
          </p>
        </div>
        <div className={styles.download}>
          <a href="/accueil/EVAN QUINCHON CV 2023.pdf" download>
            <img src="./accueil/download.png" />
            download
          </a>
        </div>
      </div>
      <img className={styles.svg} src="/wave/wave.svg" />
    </div>
  );
}

export default En_tete;
