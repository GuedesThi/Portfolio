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
                <h1 className={styles.emoji}>👋</h1>
            </div>
            
            <div className={styles.descricao}>
                <p>
                    Desenvolvedor de Software Fullstack & estudante de Ciência da Computação.
                    Criador de interfaces acessíveis, com ótima usabilidade e bela aparência, Back-End 
                    desenvolvido seguindo boas práticas de código limpo, fáceis implementações de futuras
                    atualizações e lógica simples, porém prática.
                </p>
            </div>

            <div className={styles.containerSkills}>
                <h2>Minhas Habilidades/Skills</h2>

                <div className={styles.skylls}>

                    <div className={styles.linhaUm}>
                        <div className={styles.espacoUm}>
                            <div className={styles.elemento}>
                                <DiHtml5 color='#FE572A' size={70}/><span>HTML5</span>
                            </div>
                            <div className={styles.elemento}>
                                <DiCss3 color='blue' size={70}/><span>CSS3</span>
                            </div>
                            <div className={styles.elemento}>
                                <DiJsBadge color='#F7DF1D' size={60}/><span className={styles.mudar}>JavaScript</span>
                            </div>
                        </div>

                        <div className={styles.espacoDois}>
                            <div className={styles.elemento}>
                                <DiReact color='#00eeee' size={70}/><span>React</span>
                            </div>
                            <div className={styles.elemento}>
                                <DiNodejs color='#14ce23' size={70}/><span>Node.js</span>
                            </div>
                            <div className={styles.elemento}>
                                <DiNpm color='#ce1414' size={70}/><span className={styles.mudarN}>NPM</span>
                            </div>
                        </div> 

                        <div className={styles.espacoTres}>
                            <div className={styles.elemento}>
                                <SiNextdotjs color='#000000' size={55}/><span className={styles.mudarDois}>Next.js</span>
                            </div>
                            <div className={styles.elemento}>
                                <SiTailwindcss color='#05c5ff' size={60}/><span className={styles.mudarDoiss}>Tailwindcss</span>
                            </div>
                            <div className={styles.elemento}>
                                <BiLogoTypescript color='#2F78C5' size={70}/><span className={styles.mudarT}>TypeScript</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.linhaDois}>
                        <div className={styles.espacoQuatro}>
                            <div className={styles.elemento}>
                               <DiGit color='#DE4C36' size={70}/><span>Git</span> 
                            </div>
                            <div className={styles.elemento}>
                                <DiGithubBadge  color='#000000' size={70}/><span>GitHub</span>
                            </div>
                            <div className={styles.elemento}>
                                <DiPython color='#0277BC' size={70}/><span>Python</span>
                            </div>
                        </div>

                        <div className={styles.espacoCinco}>
                            <div className={styles.elemento}>
                                <DiDjango color='#0F3E2E' size={60}/><span className={styles.mudarD}>Django</span>
                            </div>
                            <div className={styles.elemento}>
                                <DiMysql color='#247091' size={70}/><span className={styles.mudarM}>MySQL</span>
                            </div>
                            {/* <div className={styles.elemento}>
                               <DiPhp color='#607BC0' size={70}/><span className={styles.mudarP}>PHP</span> 
                            </div> */}
                        </div>

                        <div className={styles.espacoSeis}>
                            <div className={styles.elemento}>
                               <SiMicrosoftexcel color='#01723A' size={60}/><span className={styles.mudarE}>Excel</span> 
                            </div>
                            <div className={styles.elemento}>
                                <FaFigma color='#DE4C36' size={57}/><span className={styles.mudarF}>Figma</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Main;