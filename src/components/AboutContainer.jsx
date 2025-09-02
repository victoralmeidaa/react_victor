import "../styles/components/sobre.sass"
import Logo_Uniavan from '../img/logouniavan.webp'

const AboutContainer = () =>{
    return (
        <section id="sobre"> 
            <h2>Sobre</h2>
            <h3>Bem vindo ao meu Portfolio 👋</h3><br/>
            
            <p>
                📚 Olá! Me chamo Victor Almeida, atualmente estou no 4° período de Análise e Desenvolvimento de Sistemas na Uniavan,
                tenho habilidades em várias linguagens e tecnologias importantes para o mundo da tecnologia. Com conhecimento em WordPress,
                Node, React JS, HTML, CSS e MySQL, tenho um conjunto de habilidades que podem ser aplicadas em 
                vários tipos de projetos. <br/><br/>

                Obrigado por visitar meu perfil! 👋 😎
            </p>
            <div className="conteiner">
                <div className="elemento"> 
                    <img src={Logo_Uniavan} alt="Logo_Uniavan"></img>
                    <h3>Uniavan - Centro Universitário Avantis</h3>
                    <p>Análise e Desenvolvimento de Sistemas</p>
                    <p>4° Periodo</p>
                </div>
            
            </div>
            
        </section>

    )
}

export default AboutContainer