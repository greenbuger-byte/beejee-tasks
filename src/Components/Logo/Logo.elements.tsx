import styled from "styled-components";
import {eColors} from "../../GlobalStyles";

export const LogoText = styled.div`
  font-size: 16px;
  font-weight: bold;
`
export const LogoContainer = styled.div<{marginTop?: number}>`
  margin-top: ${ ({marginTop}) => marginTop ? marginTop+'px' : '0px'};
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const LogoImage = styled.img`
  margin: 5px 15px;
  width:60px;
  height: 60px;
  transform: rotateY(180deg);
  transition: .2s ease-in-out;
  animation: 1s bee infinite;
  
  @keyframe bee {
    0% {transform: translate( 0,3px)}
    100% {transform: translate( 0,3px)}
  }
  &:hover{
    transform: rotateY(160deg);
    cursor: pointer;
  }
`;

export const LinedText = styled.span`
  color: ${eColors.SECONDARY};
`;