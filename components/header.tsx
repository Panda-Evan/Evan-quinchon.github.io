import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

interface MenuItem {
  label: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { label: 'Mes Projets', url: 'https://panda-evan.github.io/#project' },
  { label: 'Compétences', url: 'https://panda-evan.github.io/#competence' },
  { label: 'A propos', url: 'https://panda-evan.github.io/#about' },
  { label: 'Contactez Moi', url: 'https://panda-evan.github.io/#contact' },
];

// header of home
function Header() {
  // function to scroll to the top
  const [atTop, setAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

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
      <input
        type="checkbox"
        id="navbar"
        checked={isOpen}
        onChange={toggleMenu}
        className={styles.navbar}
      />
      <label htmlFor="navbar" />
      <nav className={styles.nav}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="close" onClick={closeMenu}>
          &times;
        </a>
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