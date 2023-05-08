import styles from "../styles/project-vue.module.css";
import Carrousel from "./carrousel";

// project on the home
function Project() {
  return (
    <div className={styles.div} id="project">
      <div className={styles.text}>
        <h1>Mes Projets</h1>
      </div>

      <Carrousel />
    </div>
  );
}

export default Project;
