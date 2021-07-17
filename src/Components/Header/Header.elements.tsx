import styled from "styled-components";
import {eColors} from "../../GlobalStyles";


export const HeaderComponent = styled.header`
  width: 100%;
  background-color: ${eColors.BLANK};
  -webkit-box-shadow: -3px 10px 8px -5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -3px 10px 8px -5px rgba(34, 60, 80, 0.2);
  box-shadow: -3px 10px 8px -5px rgba(34, 60, 80, 0.2);
`;

export const HeaderWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const HeaderBlock = styled.div<{flex?: number}>`
  flex: ${ ( {flex} ) => flex ? flex : 1 };
  display: flex;
  align-items: center;
`;



export const HeaderProfileMenu = styled.h3`
  font-size: 13px;
  font-weight: 300;
  display: flex;
  align-items: center;
  margin:0 20px;
  cursor: pointer;
  &:hover {
    color: ${eColors.SECONDARY};
  }
`;
export const HeaderProfileIcon = styled.button`
  background-color: white;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border-radius: 50%;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  
  &:hover{
    border: 1px solid ${eColors.SECONDARY};
    color: ${eColors.PRIMARY};
  }
`;

export const HeaderProfile = styled.div`
  font-size: 13px;
  display: flex;
  
  align-items: center;
`;


