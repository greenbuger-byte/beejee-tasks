import React from 'react';
import avatarSvg from "../../assets/avatar.svg"
import {Button, Avatar, IconButton} from "../../GlobalStyles";
import BxLogInCircleIcon from "../Icons/BxLogInCircleIcon";
import Logo from "../Logo/Logo";
import {useActions} from "../../hook/useActions";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {
    HeaderBlock,
    HeaderComponent,
    HeaderWrapper,
    HeaderProfile,
    HeaderProfileMenu,
    HeaderUserName,
    HeaderSpacer
} from "./Header.elements";

const Header = () => {
    const {toggleLoginFormActionCreator, logoutUserActionCreator} = useActions();
    const {login} = useTypedSelector(state => state.user);
    return (
        <HeaderComponent>
            <HeaderWrapper>
                <HeaderBlock flex={1}>
                    <Logo/>
                </HeaderBlock>
                <HeaderSpacer flex={1} />
                <HeaderBlock flex={.3}>
                    {login ? <HeaderProfile >
                        <Avatar src={avatarSvg}/>
                        <HeaderProfileMenu>
                            <HeaderUserName>ADMIN</HeaderUserName>
                            <IconButton margin={'0 10px'} onClick={logoutUserActionCreator}>
                                <BxLogInCircleIcon />
                            </IconButton>
                        </HeaderProfileMenu>
                    </HeaderProfile> :
                        <Button onClick={toggleLoginFormActionCreator} outlined>Вход</Button>
                    }
                </HeaderBlock>
            </HeaderWrapper>
        </HeaderComponent>
    );
};

export default Header;