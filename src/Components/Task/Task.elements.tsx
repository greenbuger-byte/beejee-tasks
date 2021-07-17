import styled from "styled-components";
import {eColors} from "../../GlobalStyles";


export const TaskWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  
  @media screen and (max-width: 1220px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 960px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
  }
`;

export const TaskColumn = styled.div`
display: flex;
  flex-direction: row;
`;
export const TaskContainer = styled.div`
  
  width: 100%;
  padding: 5px;
`;

export const TaskBody = styled.div`
  border: 1px solid whitesmoke; 
  position: relative;
  background-color: white;
  display: flex;
  max-width: 100%;
  height: 300px;
  overflow-y: scroll;
  flex-direction: column;
  padding:0;
  border-radius: 15px 15px 0 15px;
  -webkit-box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;
  transition: .3s;
  &::-webkit-scrollbar {
    width: 1em;
  }
  &:hover{
    -webkit-box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.6);
    box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.6);
  }
`;

export const TaskRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 10px;
  color: ${eColors.LIGHT_TEXT};
`;

export const TaskTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-weight: bold;
  position: sticky;
  top:0;
  background-color: ${eColors.BLANK};
  border-bottom: 1px solid ${eColors.LiGHT};
`;

export const TaskEmail = styled.h3`
  font-size: 13px;
  font-weight: 200;
  color: ${eColors.LIGHT_TEXT};
`;

export const TaskName = styled.h1`
  font-size: 18px;
  width: 240px;
  white-space: nowrap;
  overflow: hidden;  
  padding: 5px; 
  text-overflow: ellipsis; 

`;