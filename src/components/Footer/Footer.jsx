import React from "react";
import Logo from "../Logo/Logo";
import '../Footer/footerstyles.css';

function Footer(){
    return(
        <footer>
            <Logo />
        <p className="copy">CLOTHING | Todos los derechos reservados ©</p>
        <div className="social-media">
            <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
            <a href="https://twitter.com/?lang=es"><i className="bi bi-twitter-x"></i></a>
            <a href="https://www.facebook.com/?locale=es_LA"><i className="bi bi-facebook"></i></a>
        </div>
        </footer>
    )
};

export default Footer;