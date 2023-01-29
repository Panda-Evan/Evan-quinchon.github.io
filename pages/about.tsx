import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/About.module.css";

// page about
function About() {
  return (
    <>
      <Head>
        <title>Quinchon Evan - Portfolio</title>
        <link rel="icon" href="/accueil/panda.ico" />
      </Head>
      <Header />
      <div className={styles.div}>
        <div className={styles.text}>
          <text>A Propos</text>
        </div>
        <div className={styles.timeline}>
          <div className={styles.container_left}>
            <div className={styles.content}>
              <h2>2022</h2>
              <p>
                2022, j'ai été accepté à l'
                <a href="https://etna.io/">
                  <b>ETNA</b> <img src="/accueil/lien.png" />
                </a>
                . Actuellement je me pationne sur le <b>dev front end</b>, mais
                j'aimerai toujour aussi etre{" "}
                <b>game developper et/ou game designer</b>. Mon but final serait
                de devenir{" "}
                <b>chef de projet tout en continuant de programmer</b>.
              </p>
            </div>
          </div>
          <div className={styles.container_right}>
            <div className={styles.content}>
              <h2>2020-2021</h2>
              <p>
                2020, mon entré en 1ère avec comme option{" "}
                <b>NSI, Maths, Physique</b>. On apprenais le coté <b>logique</b>{" "}
                et <b>pratique</b> du numérique en <b>NSI</b>. Suivis par de
                l'apprentisage en <b>python</b>, dont j'étais dejà avancé. Pour
                finir sur du <b>HTML</b> avec <b>CSS</b>. A ce moment j'était
                plus sur la <b>programmation</b> de jeu que de site.
              </p>
            </div>
          </div>
          <div className={styles.container_left}>
            <div className={styles.content}>
              <h2>2019</h2>
              <p>
                Sortons des cours avec mon passage en 2nd, je me documentai
                toujours plus sur le <b>python</b>. C'est aussi à ce moment que
                j'eu envie de commencer à <b>créer un jeu</b>. J'ai commencer
                avec des <b>petits jeux</b> comme{" "}
                <a href="https://www.google.com/fbx?fbx=snake_arcade">
                  snake <img src="/accueil/lien.png" />
                </a>
                , ou le{" "}
                <a href="http://www.mathsaharry.com/fort/fort_harry.htm">
                  jeu des batôns <img src="/accueil/lien.png" />
                </a>
                .
              </p>
            </div>
          </div>
          <div className={styles.container_right}>
            <div className={styles.content}>
              <h2>2018</h2>
              <p>
                Après avoir été forcé de redoubler ma 3e, je me suis inscrit au
                <b>coding club d'epitech</b>. Ce fut une joie pour moi, à tel
                point que j'y suis retourné mainte et mainte fois, à tel point
                que je connaissais tout les sujets. Les Assets ( surveillant )
                m'ont fait faire un test de 1ére année que j'ai réussi ( à
                moitier: j'ai réussi les 2/3 de l'exercice). Grace à cela j'ai
                pu apprendre plusieur nouveau languge comme le <b>ruby</b>, le{" "}
                <b>lua</b> ou encore le <b>C</b>.
              </p>
            </div>
          </div>
          <div className={styles.container_left}>
            <div className={styles.content}>
              <h2>2017</h2>
              <p>
                2017, au vacance d'été, je me suis intéréssé de près à{" "}
                <b>python</b>, sachant que j'allais en faire au cours de
                l'année. Au début de l'année, je commençais la maîtrise de base
                de <b>python</b> ( les fonctions, les variables, ect.. ). Arrivé
                en millieu d'année, je commençais les cours de <b>python</b>{" "}
                avec des calculs. C'est aussi cette que je fus la connaissance
                d'
                <b>epitech</b>.
              </p>
            </div>
          </div>
          <div className={styles.container_right}>
            <div className={styles.content}>
              <h2>2016</h2>
              <p>
                2016 était pour moi, le commencement d'une nouvelle passion,
                l'informatique. C'est pour la première fois que j'utilisais
                Scratch. J'ai de suite bien aimé et ai vite compris comment cela
                fonctionnais. Je suis donc passé directement au projet final
                visé qui était un{" "}
                <a href="https://www.google.com/fbx?fbx=snake_arcade">
                  snake <img src="/accueil/lien.png" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
