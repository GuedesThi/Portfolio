import styles from './Projects.module.css'
import { LuSwords } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiEngine } from "react-icons/pi";
import { TiWeatherCloudy } from "react-icons/ti";
import { RiNotionFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h2>Meus</h2>
                <h2 className={styles.mudar}>Projetos/Experiências</h2>
            </div>
            
            <div className={styles.containerProjetos}>

                {/* ----------------------------------------------------------------------------- */}

                <div className={styles.projetos}>
                    <div className={styles.projeto}>
                        <MdLocalMovies size={50} color='#c56104'/>
                        <h3>MovieSeries</h3>
                        <p>
                            Aplicação onde o usuário cria cards sobre filmes ou séries. Ele informa
                            sinopse, data, gênero, imagem, etc. Tudo feito com Django Framework
                        </p>

                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <p>Front-End</p>
                            </div>
                            <div className={styles.botao}>
                                <p>Back-End</p>
                            </div>
                            <div className={styles.botao}>
                                <p>Django</p>
                            </div>
                        </div>
                        
                        <div className={styles.lado}>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link Projeto</a>
                          <a href='/'>|</a>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a>
                        </div>
                    </div>

                    <div className={styles.projeto}>
                        <GiClothes size={50} color='#1f663f'/>
                        <h3>Buy Me</h3>
                        <p>
                            E-Commerce completo para venda de roupas. Front-End feito com React e possui responsividade para celulares
                        </p>

                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <p>Front-End</p>
                            </div>
                            <div className={styles.botao}>
                                <p>React</p>
                            </div>
                        </div>

                        <div className={styles.lado}>
                          <a href='https://api-cep-mu.vercel.app/' target="_blank">Link Projeto</a>
                          <a href='/'>|</a>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a> 
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------------------------------------------- */}

                <div className={styles.projetos}>
                    <div className={styles.projeto}>
                            <RiNotionFill size={50} color='#000000'/>
                            <h3>Notion Clone</h3>
                            <p>
                                Um clone do famoso Website Notion
                            </p>

                            <div className={styles.categoria}>
                                <div className={styles.botao}>
                                    <p>F</p>
                                </div>
                                <div className={styles.botao}>
                                    <p>R</p>
                                </div>
                                <div className={styles.botao}>
                                    <p>V</p>
                                </div>
                            </div>
                            
                            <div className={styles.lado}>
                            <a href='https://jogador-caro.vercel.app/' target="_blank">Link Projeto</a>
                          <a href='/'>|</a>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a>
                            </div>
                        </div>
                    
                        <div className={styles.projeto}>
                            <TiWeatherCloudy size={50} color='#0f4ab9'/>
                            <h3>The Weather</h3>
                            <p>
                                Página única onde o usuário informa uma cidade e é retornado com
                                a ajuda de uma API o clima dessa respectiva cidade
                            </p>

                            <div className={styles.categoria}>
                                <div className={styles.botao}>
                                    <p>Front-End</p>
                                </div>
                                <div className={styles.botao}>
                                    <p>API</p>
                                </div>
                            </div>

                            <div className={styles.lado}>
                            <a href='https://api-weather-tau.vercel.app/' target="_blank">Link Projeto</a>
                          <a href='/'>|</a>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a>
                            </div>
                        </div>
                    
                </div>

                {/* ----------------------------------------------------------------------------- */}

                <div className={styles.projetos}>
                    <div className={styles.projeto}>
                            <PiEngine size={50} color='#124907'/>
                            <h3>Makers Posts</h3>
                            <p>
                                Webpage que simula uma página de perfil onde mostra os posts que o usuário
                                curtiu. Todas as informações dos posts foram tiradas de Arrays com Objects
                            </p>

                            <div className={styles.categoria}>
                                <div className={styles.botao}>
                                    <p>Front-End</p>
                                </div>
                                <div className={styles.botao}>
                                    <p>React</p>
                                </div>
                                <div className={styles.botaoMudar}>
                                    <p>Simulação de API</p>
                                </div>
                            </div>
                            
                            <div className={styles.lado}>
                            <a href='https://jogador-caro.vercel.app/' target="_blank">Link Projeto</a>
                          <a href='/'>|</a>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a>
                            </div>
                        </div>

                        <div className={styles.projeto}>
                            <MdOutlineEmail size={50} color='#b9ae0f'/>
                            <h3>Find Your Adress</h3>
                            <p>
                                Página única onde o usuário informa seu CEP e a API ViaCEP informa o 
                                endereço e retorna na tela. Retornando respostas de erro em caso do mesmo
                            </p>

                            <div className={styles.categoria}>
                                <div className={styles.botao}>
                                    <p>Front-End</p>
                                </div>
                                <div className={styles.botao}>
                                    <p>API</p>
                                </div>
                            </div>

                            <div className={styles.lado}>
                            <a href='https://api-cep-mu.vercel.app/' target="_blank">Link Projeto</a>
                          <a href='/'>|</a>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a>
                            </div>
                        </div>

                </div>

                {/* ----------------------------------------------------------------------------- */}

                                {/* ----------------------------------------------------------------------------- */}

                                <div className={styles.projetos}>
                    <div className={styles.projeto}>
                        <LuSwords size={50} color='#9909f8'/>
                        <h3>Jogador Caro</h3>
                        <p>
                            Um Website para usuários poderem jogar e gerenciar partidas de RPG's 
                            de Mesa através da Aplicação. Foi feito apenas para ser interface, e é
                            responsivo para celulares
                        </p>

                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <p>Front-End</p>
                            </div>
                            <div className={styles.botao}>
                                <p>React</p>
                            </div>
                            <div className={styles.botao}>
                                <p>Vite.js</p>
                            </div>
                        </div>
                        
                        <div className={styles.lado}>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link Projeto</a>
                          <a href='/'>|</a>
                          <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a> 
                        </div>
                    </div>

                    <div className={styles.projeto}>
                        <BsNintendoSwitch size={50} color='#ee0e0e'/>
                        <h3>Super Mario</h3>
                        <p>
                            Representação básica do famoso jogo Super Mario totalmente
                            feito com Front-End básico
                        </p>

                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <p>Front-End</p>
                            </div>
                            <div className={styles.botao}>
                                <p>Lógica</p>
                            </div>
                        </div>

                        <div className={styles.lado}> 
                            <a href='https://super-mario-murex.vercel.app/' target="_blank">Link Projeto</a>
                            <a href='/'>|</a>
                            <a href='https://github.com/GuedesThi/Super-Mario' target="_blank">Link GitHub</a>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------------------------------------------- */}

            </div>
        </div>
    )
}

export default Projects;