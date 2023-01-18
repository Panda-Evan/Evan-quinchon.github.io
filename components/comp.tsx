import { type } from "os";
import { useEffect, useState } from "react";
import styles from "../styles/Comp.module.css";

function Comp() {
  const [web, setWeb] = useState(true);
  const [prog, setProg] = useState(false);
  const [other, setOther] = useState(false);

  const div_web = () => {
    setProg(false);
    setOther(false);
    setWeb(true);
  };

  const div_prog = () => {
    setWeb(false);
    setOther(false);
    setProg(true);
  };

  const div_other = () => {
    setWeb(false);
    setProg(false);
    setOther(true);
  };

  return (
    <div className={styles.div} id="competence">
      <img src="/wave/wave1.svg" />
      <div className={styles.div_doc}>
        <text>Compétences</text>
        <nav>
          <div className={styles.div_button}>
            <button onClick={div_web}>Developement Web</button>
            <button onClick={div_prog}>Language de programmation</button>
            <button onClick={div_other}>Autres</button>
          </div>
          <div className={styles.div_ap}>
            {web && (
              <div className={styles.comp}>
                <div className={styles.column}>
                  <a target="_blank" href="https://nextjs.org/">
                    <img src="/logo_prog/web/nextjs.png" />
                  </a>
                  <p>Next JS</p>
                  <br />
                  <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
                    <img src="/logo_prog/web/js.png" />
                  </a>
                  <p>JavaScript</p>
                </div>
                <div className={styles.column}>
                  <a target="_blank" href="https://fr.reactjs.org/">
                    <img src="/logo_prog/web/react.webp" />
                  </a>
                  <p>ReactJS</p>
                  <br />
                  <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS">
                    <img src="/logo_prog/web/css.png" />
                  </a>
                  &#47;
                  <a>
                    <img src="/logo_prog/web/scss.png" />
                  </a>
                  <p>CSS / SCSS</p>
                </div>
              </div>
            )}
            {prog && (
              <div className={styles.comp}>
                <div className={styles.column}>
                  <a target="_blank" href="https://www.python.org/">
                    <img src="/logo_prog/prog/python.png" />
                  </a>
                  <p>Python</p>
                  <br />
                  <a target="_blank" href="https://www.ruby-lang.org/fr/">
                    <img src="/logo_prog/prog/ruby.png" />
                  </a>
                  <p>Ruby</p>
                </div>
                <div className={styles.column}>
                  <a target="_blank" href="https://www.guru99.com/c-programming-language.html">
                    <img src="/logo_prog/prog/C.png" />
                  </a>
                  <p>C</p>
                  <br />
                  <a target="_blank" href="https://www.lua.org/">
                    <img src="/logo_prog/prog/lua.png" />
                  </a>
                  <p>Lua</p>
                </div>
              </div>
            )}
            {other && (
              <div className={styles.comp}>
                <div className={styles.column}>
                  <a target="_blank" href="https://git-scm.com/">
                  <img src="/logo_prog/other/git.png" /></a>
                  <p>Git</p>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      <img className={styles.svg} src="/wave/wave2.svg" />
    </div>
  );
}

export default Comp;
