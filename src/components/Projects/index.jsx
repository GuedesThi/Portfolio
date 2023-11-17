import styles from './Projects.module.css'
import { LuSwords } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h2>Meus</h2>
                <h2 className={styles.mudar}>Projetos/Experiências</h2>
            </div>
            <div className={styles.containerProjetos}>
                <div className={styles.projetos}>
                    <div className={styles.projeto}>
                        <LuSwords size={50} color='#9909f8'/>
                        <h3>Gerenciador de RPG de Mesa Online</h3>
                        <p>
                            Um Website para usuários poderem jogar e gerenciar partidas de RPG's 
                            de Mesa através da Aplicação. Foi feito apenas para ser interface
                        </p> 
                        <div className={styles.lado}>
                          <a href='https://jogador-caro.vercel.app/'>Link</a> 
                        </div>
                    </div>

                    <div className={styles.projeto}>
                        <MdOutlineEmail size={50} color='#b9ae0f'/>
                        <h3>Encontre Seu Endereço Pelo CEP</h3>
                        <p>
                            Página única onde o usuário informa seu CEP e a API ViaCEP informa o 
                            endereço e retorna na tela. Retornando respostas de erro em caso do mesmo
                        </p>
                        <div className={styles.lado}>
                          <a href='https://api-cep-mu.vercel.app/'>Link</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;