import { useEffect, useState } from "react";
import styles from "../styles/Comp.module.scss";
import { buttons } from "./data/comp";

export default function Comp() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <div className={styles.div} id="competence">
      <img src="/wave/wave1.svg" />
      <div className={styles.div_doc}>
        <h1>Compétences</h1>
        <nav>
          <div className={styles.div_button}>
            {buttons.map((button, index) => (
              <button
                key={index}
                className={
                  activeButtonIndex === index ? styles.active : styles.button
                }
                onClick={() => setActiveButtonIndex(index)}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className={styles.div_ap}>
            {buttons[activeButtonIndex].content.map((content, index) => (
              <a
                key={index}
                target="_blank"
                href={content.url}
                className={content.badgeClass}
              >
                <div className={styles.circle}>
                  <img src={content.src} />
                  <div className={styles.ribbon}>{content.label}</div>
                </div>
              </a>
            ))}
          </div>
        </nav>
      </div>
      <img className={styles.svg} src="/wave/wave2.svg" />
    </div>
  );
}
