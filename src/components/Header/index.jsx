import styles from './Header.module.css'

function Header(props) {
    return (
        <div className={styles.container}>
            <div className={styles.contorno}>
                <h1 className={styles.nome}>Thiago Guedes</h1> 
            </div>
            {/* <div className={styles.opcoes} onClick={props.sessaoUm}>
                <div className={styles.opcaoUm}>
                    <a className={styles.linkTopo}>Sobre Mim</a>
                </div>
                <div className={styles.opcaoDois} onClick={props.sessaoDois}>
                    <a className={styles.linkTopo}>Meus Projetos</a>
                </div>
                <div className={styles.opcaoTres} onClick={props.sessaoTres}>
                    <a className={styles.linkTopo}>Contatos</a>
                </div> 
            </div> */}
            
        </div>
    )
}

export default Header;