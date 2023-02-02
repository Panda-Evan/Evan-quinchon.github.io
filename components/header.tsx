import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

// header of home
function Header() {
  // function to scroll to the top
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <input className={styles.navbar} type="checkbox" id="navbar" />
      <label htmlFor="navbar"></label>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="https://panda-evan.github.io/#project">Mes Projets</a>
          </li>
          <li>
            <a href="https://panda-evan.github.io/#competence">Compétences</a>
          </li>
          <li>
            <a href="https://panda-evan.github.io/#about">A propos</a>
          </li>
          <li>
            <a href="https://panda-evan.github.io/#contact">Contactez Moi</a>
          </li>
        </ul>
      </nav>
      <div>
        {!atTop && ( // appears when the scroll bar is not fully
          <div>
            <a href="#top">
              <img className={styles.top} src="/accueil/top.ico" />
            </a>
          </div>
        )}
      </div>
      <div className={styles.FABMenu}>
        <input type="checkbox"/>
        <div className={styles.hamburger}>
          <div className={styles.dots}>
            <span className={styles.first}></span>
            <span className={styles.second}></span>
            <span className={styles.third}></span>
          </div>
        </div>
        <div className={styles.action_items_bar}>
          <div className={styles.action_items}>
            <span className={styles.first_item}>
              <a href="https://panda-evan.github.io/#project" className={styles.material_icons}><img src="/header/project.ico" /></a>
            </span>
            <span className={styles.second_item}>
              <a href="https://panda-evan.github.io/#competence" className={styles.material_icons}><img src="/header/comp.ico" /></a>
            </span>
            <span className={styles.third_item}>
              <a href="https://panda-evan.github.io/#about" className={styles.material_icons}><img src="/header/about.ico" /></a>
            </span>
            <span className={styles.fourth_item}>
              <a href="https://panda-evan.github.io/#contact" className={styles.material_icons}><img src="/header/contact.ico" /></a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
