import styled from "styled-components";
import {eColors} from "../../GlobalStyles";

export const CreateTaskComponent = styled.div`
  
  border: 1px solid ${eColors.LiGHT};
  background-color: ${eColors.BLANK};
  min-height: 400px;
  color: ${eColors.PRIMARY};
  width: 300px;
  border-radius: 15px 15px 0 15px;
  padding: 20px;
  position: absolute;
  top: 55px;
  z-index: 1;
  
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
  @media screen and (max-width: 640px){
    box-sizing: border-box;
    position: fixed;
    margin: 0;
    left: 0;
    top:0;
    overflow: hidden;
    right: 0;
    width: 100%;
    height: 100vh;
    &:before {
      content: '';
      border: none;
    }
    &:after {
      content: '';
      border: none;
    }
    }
  }
`;

export const TitleCreateTask = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;