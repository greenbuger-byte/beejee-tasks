import styled from "styled-components";
import {eColors} from "../../GlobalStyles";

export const FilterBarComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${eColors.SECONDARY};
  border: 1px solid ${eColors.SECONDARY};
  position: sticky;
  z-index: 1;
  border-radius: 0 0 15px 15px;
  top: 0;
  padding: 10px;
  -webkit-box-shadow: -3px 10px 8px -5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -3px 10px 8px -5px rgba(34, 60, 80, 0.2);
  box-shadow: -3px 10px 8px -5px rgba(34, 60, 80, 0.2);
`;
export const FilterBlock = styled.div`
  margin:0 5px;
`;
export const FilterBurger = styled.i`
  
`;