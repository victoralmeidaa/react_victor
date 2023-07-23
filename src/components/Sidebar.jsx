import React from "react";
import SocialNetworks from "./SocialNetworks";
import Avatar from '../img/eu.jpg'
import "../styles/components/sidebar.sass"
import InformationConteiner from "./InformationConteiner";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Victor Almeida" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationConteiner />
            <a href="../curriculo/victoralmeida.zip" download="victoralmeida.zip" type="application.zip" className="btn">Download curriculo</a>

        </aside>
    )
}

export default Sidebar;