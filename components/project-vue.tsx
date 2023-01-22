import styles from "../styles/project-vue.module.css";
import Carrousel from "./carrousel";

function Project() {
  return (
    <div className={styles.div} id="project">
      <div className={styles.text}>
        <text>Mes Projets</text>
      </div>

      <Carrousel />
    </div>
  );
}

export default Project;
