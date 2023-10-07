import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import "../styles/components/informationconteiner.sass"

const InformationConteiner = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(47) 9 8407-5819</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>victordealmeida5@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Itajai / SC</p>
                </div>
            </div>
        </section>
    );
};

export default InformationConteiner