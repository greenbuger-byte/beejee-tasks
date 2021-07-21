import styled, {createGlobalStyle} from "styled-components";

export enum eColors {
    PRIMARY='#000',
    SECONDARY = '#ffd600',
    HOVER = '#eec41d',
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
    list-style: none;
  }
  body{
    background-color: ${eColors.BACKGROUND};
  }
`;

/* ======== FORM ========= */

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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: ${({position}) => position ? position : 'left'};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const TextArea = styled.textarea<{height?:number}>`
  font-size: 14px;
  font-weight: normal;
  border-radius: 15px 15px 0 15px;
  border: 1px solid ${eColors.LiGHT};
  color: ${eColors.PRIMARY};
  scroll-behavior: smooth;
  padding: 15px 15px;
  width: 100%;
  height: ${({height}) => height ? height+'px' : '150px'};
  margin: 0;
  outline: none;
  resize: vertical;
  wrap: hard;
  &::-webkit-scrollbar {
    width: 1em;
  }
`;

export const Button = styled.button<{color?: string, background?: string, outlined?: boolean}>`
  background-color: ${({outlined}) => outlined ? eColors.BLANK : eColors.SECONDARY};
  border:1px solid ${eColors.HOVER};
  border-radius: 45px;
  color: ${({color}) => color? color : eColors.PRIMARY};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 11px 23px;
  font-size: 14px;
  transition: background-color .3s;
  &:hover{
    background-color: ${eColors.HOVER};
  }
`;

export const IconButton = styled.button<{size?: number, fontSize?: number, margin?:string, shadow?:boolean}>`
  background-color: white;
  width: ${({size}) => size ? size+'px' : '30px' };
  height: ${({size}) => size ? size+'px' : '30px' };
  border-radius: 50%;
  padding: 0;
  margin:  ${({margin}) => margin ? margin : 0 };
  display: flex;
  font-size: ${({fontSize}) => fontSize ? fontSize+'px' : '15px' };;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  ${(props) => props.shadow && 'box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.2);'}
}
  &:hover{
    border: 1px solid ${eColors.SECONDARY};
    color: ${eColors.PRIMARY};
  }
`;

export const Select = styled.select<{margin?: string}>`
  outline: none;
  padding: 10px 40px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${eColors.LiGHT};
  color: ${eColors.PRIMARY};
  border-radius: 45px;
  background-color: ${eColors.BLANK};
  ${({margin}) => margin ? 'margin: '+ margin : ''}
`;

/*======= USER  ======= */

export const Avatar = styled.img<{size?: number}>`
  width: ${ ({size}) => size ? size+'px' : '30px' };
  height: ${ ({size}) => size ? size+'px' : '30px' };
  border-radius: 50%;
  border: 1px solid ${eColors.LiGHT};
`;

/* ====== BLOKS ======= */

export const Wrapper = styled.div`
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 141px);
  max-width: 1440px;
  margin: auto;
`;

export const Spacer = styled.div<{size: number}>`
  width: 100%;
  box-sizing: border-box;
  margin: ${ props => `${props.size}px` };
`;

export const BlockHiddenMobile = styled.span`
  display: block;
  @media screen and (max-width: 650px){
    display: none;
  }
`;

export default GlobalStyles;