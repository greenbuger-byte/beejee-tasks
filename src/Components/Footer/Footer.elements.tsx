import styled from "styled-components";
import {eColors} from "../../GlobalStyles";

export const FooterComponent = styled.div`
  background-color: ${eColors.LiGHT};
  color: ${eColors.PRIMARY};
  width: 100%;
`;

export const  FooterWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  
`;

export const FooterSection = styled.div`
  flex: 1;
  padding: 30px 10px;
`;
