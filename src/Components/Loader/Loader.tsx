import React from 'react';
import {LoaderBlock, LoaderImage, LoaderText, LoaderWrapper} from "./Loader.elements";
import logo from '../../assets/beejee_small.png';
const Loader = () => {
    return (
        <LoaderWrapper>
            <LoaderBlock>

                <LoaderImage src={logo} alt={'loading'}/>
                <LoaderText>Ищем задачи</LoaderText>
            </LoaderBlock>

        </LoaderWrapper>
    );
};
export default Loader;