import React, {ChangeEvent, useState} from 'react';
import { LoginBox, LoginCloseBtn, LoginContainer, LoginHeader} from "./Login.elements";
import {Button, Input, InputControl, InputErrors} from "../../GlobalStyles";
import {useActions} from "../../hook/useActions";
import {useTypedSelector} from "../../hook/useTypedSelector";
import BxXIcon from "../Icons/BxXIcon";
import Logo from "../Logo/Logo";

const Login = () => {
    const {loginUserActionCreator, toggleLoginFormActionCreator} = useActions();
    const { status } =useTypedSelector(state => state.user);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState('');
    const LoginHandler = () => {
        loginUserActionCreator(username, password);
    }
    return (
        <LoginContainer>
            <LoginBox>
                <LoginCloseBtn onClick={toggleLoginFormActionCreator}><BxXIcon/></LoginCloseBtn>
                <LoginHeader><Logo/></LoginHeader>
                <InputControl>
                    <Input
                        placeholder = 'Логин'
                        value={username}
                        error = {status!==null && Boolean(status.username)}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => setUsername( e.target.value ) }
                    />
                    {status!==null && status.username && <InputErrors> { status.username }  </InputErrors>}
                </InputControl>
                <InputControl>
                    <Input
                        value={password}
                        type={'password'}
                        error = {status!==null && Boolean(status.password)}
                        placeholder={'Пароль'}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword( e.target.value ) }
                    />
                    {status!==null && status.password && <InputErrors> { status.password }  </InputErrors>}
                </InputControl>


                <InputControl position={'end'}>
                    <Button onClick={LoginHandler}>Войти</Button>
                </InputControl>
            </LoginBox>

        </LoginContainer>
    );
};

export default Login;