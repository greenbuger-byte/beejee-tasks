import styled from "styled-components";
import {eColors} from "../../../GlobalStyles";


export const CustomSelectComponent = styled.div<{margin?: number}>`
  outline: none;
  padding: 7px 15px;
  width: 260px;
  height: 42px;
  font-size: 15px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid whitesmoke;
  color: #000;
  border-radius: 45px;
  background-color: ${eColors.BLANK};
  ${({margin}) => margin ? 'margin: '+ margin : ''};
  position: relative;
  cursor: pointer;
  @media screen and (max-width: 650px){
    width: 100px;
    display: flex;
    align-items: center;
    font-size: 10px!important;
  }
`;
export const CustomSelectBody = styled.span`

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CustomSelectList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${eColors.BLANK};
  list-style: none;
  position: absolute;
  left: 0;
  width: 100%;
  border: 1px solid  ${eColors.LiGHT};
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  &:before{
    content: '';
    position: absolute;
    left: 25px; top: -22px;
    border: 10px solid transparent;
    border-bottom: 10px solid ${eColors.LiGHT};
  }
  &:after{
    content: '';
    position: absolute;
    left: 25px; top: -20px;
    border: 10px solid transparent;
    border-bottom: 10px solid ${eColors.BLANK};
  }
`;

export const CustomSelectOption = styled.li`
  font-size: 14px;
  padding: 5px;
  &:hover{
    color: ${eColors.SECONDARY};
  }
`;

export const CustomSelectLabel = styled.div`
  font-size: 10px;
  line-height: 10px;
  color: ${eColors.LIGHT_TEXT};
`;