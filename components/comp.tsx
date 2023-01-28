import { type } from "os";
import { useEffect, useState } from "react";
import styles from "../styles/Comp.module.scss";

// skills on home
function Comp() {
  // function activate when a button is pressed
  const [web, setWeb] = useState(true);
  const [prog, setProg] = useState(false);
  const [other, setOther] = useState(false);
  const [isActiveWeb, setIsActiveWeb] = useState(true);
  const [isActiveProg, setIsActiveProg] = useState(false);
  const [isActiveOther, setIsActiveOther] = useState(false);

  const div_web = () => {
    setProg(false);
    setOther(false);
    setWeb(true);
    setIsActiveWeb(true);
    setIsActiveProg(false);
    setIsActiveOther(false);
  };

  const div_prog = () => {
    setWeb(false);
    setOther(false);
    setProg(true);
    setIsActiveWeb(false);
    setIsActiveProg(true);
    setIsActiveOther(false);
  };

  const div_other = () => {
    setWeb(false);
    setProg(false);
    setOther(true);
    setIsActiveWeb(false);
    setIsActiveProg(false);
    setIsActiveOther(true);
  };

  return (
    <div className={styles.div} id="competence">
      <img src="/wave/wave1.svg" />
      <div className={styles.div_doc}>
        <text>Compétences</text>
        <nav>
          <div className={styles.div_button}>
            <button className={isActiveWeb === true ? styles.active : styles.button} onClick={div_web}>Developement Web</button>
            <button className={isActiveProg === true ? styles.active : styles.button} onClick={div_prog}>Language de programmation</button>
            <button className={isActiveOther === true ? styles.active : styles.button} onClick={div_other}>Autres</button>
          </div>
          <div className={styles.div_ap}>
            {web && ( // display fucntion web
              <div className={styles.comp}>
                <a target="_blank" href='https://nextjs.org/' className={styles.badge_black}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/web/nextjs.png"/>
                    <div className={styles.ribbon} >NextJS</div>
                  </div>
                </a>
                <a target="_blank" href="https://reactjs.org/" className={styles.badge_blue_light}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/web/react.webp"/>
                    <div className={styles.ribbon} >ReactJS</div>
                  </div>
                </a>
                <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS" className={styles.badge_blue}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/web/css.png"/>
                    <div className={styles.ribbon} >CSS</div>
                  </div>
                </a>
                <a target="_blank" href="https://sass-lang.com/" className={styles.badge_pink}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/web/scss.png"/>
                    <div className={styles.ribbon} >SCSS</div>
                  </div>
                </a>
                <a target="_blank" href="https://www.javascript.com/" className={styles.badge_yellow}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/web/js.png"/>
                    <div className={styles.ribbon} >Javascript</div>
                  </div>
                </a>
              </div>
            )}
            {prog && ( // display function prog
              <div className={styles.comp}>
                <a target="_blank" href="https://www.python.org/" className={styles.badge_purple}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/prog/python.png"/>
                    <div className={styles.ribbon} >Python</div>
                  </div>
                </a>
                <a target="_blank" href="https://www.ruby-lang.org/en/" className={styles.badge_red}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/prog/ruby.png"/>
                    <div className={styles.ribbon} >Ruby</div>
                  </div>
                </a>
                <a target="_blank" href="https://www.fresh2refresh.com/c-programming/c-basic-program/" className={styles.badge_blue}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/prog/c.png"/>
                    <div className={styles.ribbon} >C</div>
                  </div>
                </a>
                <a target="_blank" href="https://www.lua.org/" className={styles.badge_blue_dark}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/prog/Lua.png"/>
                    <div className={styles.ribbon} >Lua</div>
                  </div>
                </a>
              </div>
            )}
            {other && ( // display fucntion other
              <div className={styles.comp}>
                <a target="_blank" href="https://git-scm.com/" className={styles.badge_orange}>
                  <div className={styles.circle}>
                    <img src="/logo_prog/other/git.png"/>
                    <div className={styles.ribbon} >Git</div>
                  </div>
                </a>
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
