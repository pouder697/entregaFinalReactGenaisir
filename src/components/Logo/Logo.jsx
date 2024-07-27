import React from "react";
import clotheslogo from '../../assets/clotheslogo.jpg';
import '../Logo/logostyles.css';

function Logo(){
    return(
        <div>
            <img className="clothesLogo" src={clotheslogo} alt="Logo de CLOTHING" />
        </div>
    )
};

export default Logo;