import styled from "styled-components";
import {eColors} from "../../GlobalStyles";

export const LogoText = styled.div`
  font-size: 16px;
  font-weight: bold;
`

export const LogoImage = styled.img`
  margin: 0 10px;
  width: 70px;
  height: 70px;
  transition: .2s ease-in-out;
  &:hover{
    transform: rotate(5deg);
  }
`;

export const LinedText = styled.span`
  color: ${eColors.SECONDARY};
`;