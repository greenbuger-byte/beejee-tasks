import React from 'react';
import logo from "../../assets/beejee_small.png";
import {LogoText, LinedText, LogoImage} from "./Logo.elements";


const Logo = () => {
    return (
        <>
            <LogoImage src={logo}/>
            <LogoText>  B<LinedText>EE</LinedText> J<LinedText>EE</LinedText> TASKS </LogoText>
        </>
    );
};

export default Logo;