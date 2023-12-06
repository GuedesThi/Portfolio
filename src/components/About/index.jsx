import styles from './About.module.css'

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.ladoEsquerdo}>
                <div className={styles.titulo}>
                    <h2>Mais</h2>
                    <h2 className={styles.mudar}>Sobre Mim</h2>
                </div>
                
                <img src="/assets/foto.jpg" />
            </div>
            <div className={styles.ladoDireito}>
                <p>
                    Conheci o mundo da Programação em Novembro de 2022 ao sem querer instalar
                    um App do Google que ensinava o básico de JavaScript. Por curiosidade comecei
                    a pesquisar conteúdos e em menos de 1 mês já estava desenvolvendo minhas primeiras
                    Webpages
                </p>
                <p>
                    Durante meu percurso já estudei várias áreas como Mobile, Games e até Ciência de Dados,
                    porém, por conta da faculdade de Ciência da Computação que comecei em 2023
                    voltei a dar mais foco para Desenvolvimento Web. Então comecei a estudar tecnologias da área
                    como React, Node.js, Next.js, Django, JavaScript e Python
                </p>
                <p>
                    Na parte de Front-End, estudei tecnologias e ferramentas específicas da área, além de fazer 
                    cursos e ler livros sobre UI/UX para desenvolver Aplicações com uma interface acessível, usável
                    e no mínimo bonita. Já na parte de Back-End treinei Lógica de Programação em cada novo projeto, 
                    boas práticas como código limpo, manipulação de Dados, etc.
                </p>
                <p>
                    Eu amo estudar qualquer coisa de Programação, principalmente as que eu não entendo - ainda - sempre 
                    busco aprender coisas novas e aprimorar as que já sei para sempre entregar a melhor aplicação que
                    posso
                </p>
                <p>
                    Esse sou eu.
                </p>
            </div>
        </div>
    )
}

export default About;