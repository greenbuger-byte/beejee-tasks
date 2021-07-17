import styled from "styled-components";
import {eColors} from "../../GlobalStyles";

export const PaginationComponent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PaginationItem = styled.div<{active?: boolean}>`
  width: 30px;
  height: 30px;
  margin: 5px;
  border: 1px solid ${eColors.LiGHT};
  border-radius: 50%;
  background-color: ${({active}) => active ? eColors.SECONDARY : eColors.BLANK};
  color:  ${({active}) => active ? eColors.BLANK : eColors.PRIMARY};
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  
  &:hover{
    background-color: ${eColors.SECONDARY};
    color:  ${eColors.BLANK};
  }
`;