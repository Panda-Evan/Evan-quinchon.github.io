import styles from "../styles/Footer.module.css";

// footer of all page
function Footer() {
  return (
    <div>
      <img className={styles.svg} src="/wave/wave4.svg" />
      <div id='contact' className={styles.div_contact}>
        <div className={styles.div_left}>
          <h2>Me contacter</h2>
          <a href="mailto:quinch_e@etna-alternance.net">Par mail</a>
          <a href="tel:+33786642894">Par Télephone</a>
        </div>

        <div className={styles.div_right}>
          <a href="https://www.linkedin.com/in/evan-quinchon/" target="_blank">
            <img src="/footer/linkedin-logo.png" />
          </a>
          <a target="_blank">
            <img src="/footer/github-logo.png" />
          </a>
        </div>
      </div>
      <div className={styles.div_footer}>
        &#169; copyright 2023 Evan QUINCHON. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
