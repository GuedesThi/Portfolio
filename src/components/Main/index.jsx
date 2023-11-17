import styles from './Main.module.css'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejs, DiNpm, DiGit, DiGithubBadge, DiPython, DiDjango, DiMysql, DiPhp } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiMicrosoftexcel } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";

function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.nomeFrase}>
               <h1 className={styles.comeco}>
                    Olá, eu sou o
                </h1>
                <h1 className={styles.nome}>
                    Thiago Guedes
                </h1> 
                <h1>👋</h1>
            </div>
            
            <div className={styles.descricao}>
                <p>
                    Desenvolvedor de Software Fullstack & estudante de Ciência da Computação.
                    Criador de interfaces acessíveis, com ótima usabilidade e bela aparência, Back-End 
                    <br></br>
                    desenvolvido seguindo boas práticas de código limpo, fáceis implementações de futuras
                    atualizações e lógica simples, porém prática.
                </p>
            </div>

            <div className={styles.containerSkills}>
                <h2>Minhas Habilidades/Skills</h2>
                <div className={styles.skylls}>
                    <div className={styles.espaco}>
                        <DiHtml5 color='#FE572A' size={80}/><span>HTML5</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiCss3 color='blue' size={80}/><span>CSS3</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiJsBadge color='#F7DF1D' size={70}/><span className={styles.mudar}>JavaScript</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiReact color='#00eeee' size={80}/><span>React</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiNodejs color='#14ce23' size={80}/><span>Node.js</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiNpm color='#ce1414' size={80}/><span>NPM</span>
                    </div> 
                    <div className={styles.espaco}>
                        <SiNextdotjs color='#000000' size={70}/><span className={styles.mudarDois}>Next.js</span>
                    </div>
                    <div className={styles.espaco}>
                        <SiTailwindcss color='#05c5ff' size={70}/><span className={styles.mudarDois}>Tailwindcss</span>
                    </div>
                </div>
                <div className={styles.skyllsDois}>
                    <div className={styles.espaco}>
                        <DiGit color='#DE4C36' size={80}/><span>Git</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiGithubBadge  color='#000000' size={80}/><span>GitHub</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiPython color='#0277BC' size={80}/><span>Python</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiDjango color='#0F3E2E' size={80}/><span>Django</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiMysql color='#247091' size={80}/><span>MySQL</span>
                    </div>
                    <div className={styles.espaco}>
                        <DiPhp color='#607BC0' size={80}/><span>PHP</span>
                    </div>
                    <div className={styles.espaco}>
                        <BiLogoTypescript color='#2F78C5' size={80}/><span>TypeScript</span>
                    </div>
                    <div className={styles.espaco}>
                        <SiMicrosoftexcel color='#01723A' size={80}/><span>Excel</span>
                    </div>
                </div>
                <div className={styles.skyllsDois}>
                    <div className={styles.espaco}>
                        <FaFigma color='#DE4C36' size={57}/><span className={styles.mudarTres}>Figma</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;