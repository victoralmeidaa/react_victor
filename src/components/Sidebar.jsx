import React from "react";
import SocialNetworks from "./SocialNetworks";
import Avatar from '../img/eu.jpg'
import "../styles/components/sidebar.sass"

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Victor Almeida" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <p>Informações de contato</p>
            <a href="" className="btn">Download curriculo</a>

        </aside>
    )
}

export default Sidebar;