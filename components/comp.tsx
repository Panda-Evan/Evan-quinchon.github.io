import { useEffect, useState } from "react";
import styles from "../styles/Comp.module.scss";

export default function Comp() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const buttons = [
    {
      label: "Developement Web",
      content: [
        {
          src: "/logo_prog/web/nextjs.png",
          label: "NextJS",
          badgeClass: styles.badge_black,
        },
        {
          src: "/logo_prog/web/react.webp",
          label: "ReactJS",
          badgeClass: styles.badge_blue_light,
        },
        {
          src: "/logo_prog/web/css.png",
          label: "CSS",
          badgeClass: styles.badge_blue,
        },
        {
          src: "/logo_prog/web/scss.png",
          label: "SCSS",
          badgeClass: styles.badge_pink,
        },
        {
          src: "/logo_prog/web/js.png",
          label: "Javascript",
          badgeClass: styles.badge_yellow,
        },
        {
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
          src: "/logo_prog/prog/python.png",
          label: "Python",
          badgeClass: styles.badge_purple,
        },
        {
          src: "/logo_prog/prog/ruby.png",
          label: "Ruby",
          badgeClass: styles.badge_red,
        },
        {
          src: "/logo_prog/prog/C.png",
          label: "C",
          badgeClass: styles.badge_blue,
        },
        {
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
          src: "/logo_prog/other/git.png",
          label: "Git",
          badgeClass: styles.badge_orange,
        },
        {
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
                href="#"
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
    </div>
  );
}
