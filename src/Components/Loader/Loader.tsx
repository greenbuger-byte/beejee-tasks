import React from 'react';
import {LoaderBlock, LoaderImage, LoaderText, LoaderWrapper} from "./Loader.elements";
import bee from '../../assets/bee.png';
const Loader = () => {
    return (
        <LoaderWrapper>
            <LoaderBlock>

                <LoaderImage src={bee} alt={'loading'}/>
                <LoaderText>Ищем задачи</LoaderText>
            </LoaderBlock>

        </LoaderWrapper>
    );
};
export default Loader;