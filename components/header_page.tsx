import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

// header of page (not home)
function Header() {

  // function to scroll to the top
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true)
      } else {
        setAtTop(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={styles.nav} id="top">
        <div className={styles.divNavbar}>
          <a href="http://localhost:3000/#about">
            <button>A propos</button>
          </a>
          <a href="http://localhost:3000/#competence">
            <button>Compétences</button>
          </a>
          <a href="http://localhost:3000/#project">
            <button>Projets</button>
          </a>
          <a href="http://localhost:3000/#contact">
            <button>Contact</button>
          </a>
        </div>
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
      <img className={styles.svg} src="/wave/wave3.svg" />
    </header>
  );
}

export default Header;
