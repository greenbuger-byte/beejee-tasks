import React from 'react';
import {
    HeaderBlock,
    HeaderComponent,
    HeaderWrapper,
    HeaderProfile,
    HeaderProfileMenu,
    HeaderProfileIcon
} from "./Header.elements";
import logo from '../../assets/beejee_small.png';
import {Button, Avatar} from "../../GlobalStyles";
import BxLogInCircleIcon from "../Icons/BxLogInCircleIcon";
import Logo from "../Logo/Logo";
import {useActions} from "../../hook/useActions";
import {useTypedSelector} from "../../hook/useTypedSelector";


const Header = () => {
    const {toggleLoginFormActionCreator, logoutUserActionCreator} = useActions();
    const {login} = useTypedSelector(state => state.user);
    return (
        <HeaderComponent>
            <HeaderWrapper>
                <HeaderBlock flex={1}>
                    <Logo/>
                </HeaderBlock>
                <HeaderBlock flex={1} />
                <HeaderBlock flex={.3}>
                    {login ? <HeaderProfile >
                        <Avatar src={logo}/>
                        <HeaderProfileMenu>
                           ADMIN
                            <HeaderProfileIcon onClick={logoutUserActionCreator}>
                                <BxLogInCircleIcon />
                            </HeaderProfileIcon>
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