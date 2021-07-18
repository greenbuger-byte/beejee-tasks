import React from 'react';
import {LogoText, LinedText, LogoImage, LogoContainer} from "./Logo.elements";
import beeSvg from "../../assets/bee.png"
interface LogoProps {
    marginTop?: number
}
const Logo: React.FC<LogoProps> = ({marginTop}) => {
    return (
        <LogoContainer marginTop={marginTop}>
            <LogoImage src={beeSvg}/>
            <LogoText>  B<LinedText>EE</LinedText> J<LinedText>EE</LinedText> TASKS </LogoText>
        </LogoContainer>
    );
};

export default Logo;