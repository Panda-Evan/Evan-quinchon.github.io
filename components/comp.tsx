import { useEffect, useState } from "react";
import styles from "../styles/Comp.module.scss";

export default function Comp() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const buttons = [
    {
      label: "Developement Web",
      content: [
        {
          url:"https://nextjs.org/",
          src: "/logo_prog/web/nextjs.png",
          label: "NextJS",
          badgeClass: styles.badge_black,
        },
        {
          url:"https://fr.reactjs.org/",
          src: "/logo_prog/web/react.webp",
          label: "ReactJS",
          badgeClass: styles.badge_blue_light,
        },
        {
          url:"https://developer.mozilla.org/fr/docs/Web/CSS",
          src: "/logo_prog/web/css.png",
          label: "CSS",
          badgeClass: styles.badge_blue,
        },
        {
          url:"https://sass-lang.com/",
          src: "/logo_prog/web/scss.png",
          label: "SCSS",
          badgeClass: styles.badge_pink,
        },
        {
          url:"https://www.javascript.com/",
          src: "/logo_prog/web/js.png",
          label: "Javascript",
          badgeClass: styles.badge_yellow,
        },
        {
          url:"https://flutter.dev/",
          src: "/logo_prog/web/flutter.png",
          label: "Flutter",
          badgeClass: styles.badge_bleu_ciel,
        },
      ],
    },
    {
      label: "Language de programmation",
      content: [
        {
          url:"https://www.python.org/",
          src: "/logo_prog/prog/python.png",
          label: "Python",
          badgeClass: styles.badge_purple,
        },
        {
          url:"https://www.ruby-lang.org/fr/",
          src: "/logo_prog/prog/ruby.png",
          label: "Ruby",
          badgeClass: styles.badge_red,
        },
        {
          url:"https://fr.wikipedia.org/wiki/C_(langage)",
          src: "/logo_prog/prog/C.png",
          label: "C",
          badgeClass: styles.badge_blue,
        },
        {
          url:"https://www.lua.org/",
          src: "/logo_prog/prog/lua.png",
          label: "Lua",
          badgeClass: styles.badge_blue_dark,
        },
      ],
    },
    {
      label: "Autres",
      content: [
        {
          url:"https://git-scm.com/",
          src: "/logo_prog/other/git.png",
          label: "Git",
          badgeClass: styles.badge_orange,
        },
        {
          url:"https://www.figma.com/fr/",
          src: "/logo_prog/other/figma.png",
          label: "Figma",
          badgeClass: styles.badge_green,
        },
      ],
    },
  ];

  return (
    <div className={styles.div} id="competence">
      <img src="/wave/wave1.svg" />
      <div className={styles.div_doc}>
        <text>Compétences</text>
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
