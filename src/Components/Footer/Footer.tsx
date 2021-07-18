import React from 'react';
import {FooterComponent, FooterSection, FooterText, FooterWrapper} from "./Footer.elements";
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <FooterComponent>
            <FooterWrapper>
                <FooterSection>
                    <Logo marginTop={-40}/>
                </FooterSection>
                <FooterSection >
                    <FooterText>  Список задач с возможностью сортировки по имени пользователя, email и статусу.</FooterText>
                </FooterSection>
            </FooterWrapper>
        </FooterComponent>
    );
};

export default Footer;