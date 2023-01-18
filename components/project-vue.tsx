import styles from "../styles/project-vue.module.css";
import Carrousel from "./carrousel";

function Project() {
  return (
    <div className={styles.div} id="project">
      <text>Mes Projets</text>
      <Carrousel />
    </div>
  );
}

export default Project;
