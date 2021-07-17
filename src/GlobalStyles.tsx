import styled, {createGlobalStyle} from "styled-components";
export enum eColors {
    PRIMARY='#000',
    SECONDARY = '#ffe02c',
    TEXT = '#6f6f6e',
    HOVER = '#ffd526',
    LiGHT = 'whitesmoke',
    BLANK = 'white',
    ERROR = '#ff0000',
    LIGHT_TEXT = '#676767',
    BACKGROUND = '#fdfdfd'
}

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background-color: ${eColors.BACKGROUND};
  }
`;

export const Row = styled.div`
display: flex;
`;

export const Column = styled.div<{flex: number}>`
  flex: ${ ({flex}) => flex }
`;

export const Spacer = styled.div<{size: number}>`
  width: 100%;
  box-sizing: border-box;
  margin: ${ props => `${props.size}px` };
`;

export const Button = styled.button<{color?: string, background?: string, outlined?: boolean}>`
  background-color: ${({outlined}) => outlined ? eColors.BLANK : eColors.SECONDARY};
  border:1px solid ${eColors.SECONDARY};
  border-radius: 45px;
  color: ${({color}) => color? color : eColors.PRIMARY}
  transition: background-color .3s, border-color .3s,color .3s;
  cursor: pointer;
  padding: 11px 23px;
  font-size: 16px;
  &:hover{
    background-color: ${eColors.HOVER};
  }
`;


export const Avatar = styled.img<{size?: number}>`
  width: ${ ({size}) => size ? size+'px' : '30px' };
  height: ${ ({size}) => size ? size+'px' : '30px' };
  border-radius: 50%;
  border: 1px solid ${eColors.PRIMARY};
`;


// FORM

export const Input = styled.input<{error?: boolean}>`
  outline: none;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({error}) => error ? eColors.ERROR : eColors.LiGHT};
  color: ${ ({error}) => error ? eColors.ERROR : eColors.PRIMARY};
  border-radius: 45px;
`;

export const InputErrors = styled.div`
  color: ${eColors.ERROR};
  padding: 0 10px;
  line-height: 11px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 200;
`;

export const InputControl = styled.div<{position?:string}>`
  margin:10px 0;
  width: 100%;
  text-align: ${({position}) => position ? position : 'left'};
`;

export const TextArea = styled.textarea`
  font-size: 12px;
  font-weight: normal;
  border-radius: 15px 15px 0 15px;
  border: 1px solid ${eColors.LiGHT};
  color: ${eColors.PRIMARY};
  scroll-behavior: smooth;
  padding: 15px 15px;
  width: 100%;
  min-height: 150px;
  margin: 0px;
  outline: none;
  resize: vertical;
  &::-webkit-scrollbar {
    width: 1em;
  }
`;

export const Wrapper = styled.div`
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  max-width: 1440px;
  margin: auto;
`;
export default GlobalStyles;