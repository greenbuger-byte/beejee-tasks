import React from 'react';
import {FooterComponent, FooterSection, FooterWrapper} from "./Footer.elements";
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <FooterComponent>
            <FooterWrapper>
                <FooterSection>
                    <Logo/>
                </FooterSection>
            </FooterWrapper>
        </FooterComponent>
    );
};

export default Footer;