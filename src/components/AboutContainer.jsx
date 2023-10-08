import "../styles/components/sobre.sass"
import Logo_univali from '../img/logo-univali001.png'
import Logo_lamia from '../img/logo-lamia001.png'

const AboutContainer = () =>{
    return (
        <section id="sobre"> 
            <h2>Sobre</h2>
            <h3>Bem vindo ao meu Portfolio 👋</h3><br/>
            

            <p>
                📚 Olá! Me chamo Victor Almeida sou estudante de computação, atualmente estou no 4° período na UNIVALI, tenho habilidades em várias linguagens e tecnologias importantes para o 
                mundo da tecnologia. Com conhecimento em WordPress, Node, React JS, HTML, CSS e Python, tenho um conjunto sólido de habilidades que podem ser aplicadas em 
                vários tipos de projetos. Também faço parte do Lamia - Laboratório de Pesquisa em Inteligência Artificial na UTFPR no cargo de novato, onde faço o Bootcamp voltado a aprendizado de maquina. 
            </p>
            <div className="conteiner">
                <div className="elemento"> 
                    <img src={Logo_univali} alt="Logo_Univali"></img>
                    <h3>Univali - Universidade do Vale do Itajaí</h3>
                    <p>Ciència da Computação </p>
                    <p>4° Periodo</p>
                </div>
                <div className="elemento">
                    <img src={Logo_lamia} alt="Logo_Univali"></img>
                    <h3> Lamia </h3>
                    <p>Data Science & Computer Vision for Industry</p>
                    <p>Novato</p>
                </div>
            </div>
            
        </section>

    )
}

export default AboutContainer