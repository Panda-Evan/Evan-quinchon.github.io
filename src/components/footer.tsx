import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div>
      <img className={styles.svg} src="/wave/wave4.svg" />
      <div className={styles.div_contact}>
        <a href="/contact">Contactez Moi</a>
      </div>
      <div className={styles.div_footer}>
        <a href="https://www.linkedin.com/in/evan-quinchon/" target="_blank">
          <img src="/footer/linkedin-logo.png" />
        </a>
        <a target="_blank">
          <img src="/footer/github-logo.png" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
