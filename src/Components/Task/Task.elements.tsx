import styled from "styled-components";
import {eColors} from "../../GlobalStyles";


export const TaskWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  
  @media screen and (max-width: 1220px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1100px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 750px){
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

export const TaskBody = styled.div<{bgColor?: string}>`
  border: 1px solid ${({bgColor}) => bgColor ? bgColor : eColors.LiGHT}; 
  position: relative;
  background-color: white;
  display: flex;
  max-width: 100%;
  height: 300px;
  flex-direction: column;
  padding:0 0 20px 0;
  border-radius: 15px 15px 0 15px;
  box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;
  transition: .3s;

  &:hover{
    box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.6);
  }
`;

export const TaskRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  font-weight: 400;
  font-size: 14px;
  padding: 20px;
  margin-top: 10px;
  height: 100%;
  overflow-y: scroll;
  color: ${eColors.LIGHT_TEXT};
  &::-webkit-scrollbar {
    width: 1em;
  }
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

export const TaskTitleLeft = styled.div`
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
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

export const TaskStatus = styled.div<{color: string}>`
  background-color: ${ ({color}) => color };
  position: absolute;
  color: ${ ({color}) => color==='whitesmoke' ? eColors.LIGHT_TEXT : eColors.BLANK };
  right: 1px;
  padding: 1px 10px;
  top: 65px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 200;
`;

export const TaskEditBar = styled.div`
  position: absolute;
  left: 10px;
  top: 70px;
  height: 30px;
  display: flex;
  justify-content: end;
  width: 100px;
`;

export const TaskAdminStatusChanger = styled.div`
position: relative;
`;

export const TaskChangeStatusBlock = styled.ul`
  position: absolute;
  width: 200px;
  right: 0;
  margin-top: 15px;
  background-color: ${eColors.BLANK};
  border-radius: 5px;
  padding: 10px;
  border: 1px solid ${eColors.LiGHT};
  box-shadow: 4px 4px 8px -5px rgba(34, 60, 80, 0.2);
  &:before{
    content: '';
    position: absolute;
    right: 5px; top: -22px;
    border: 10px solid transparent;
    border-bottom: 10px solid ${eColors.LiGHT};
  }
  &:after{
    content: '';
    position: absolute;
    right: 5px; top: -20px;
    border: 10px solid transparent;
    border-bottom: 10px solid ${eColors.BLANK};
  } 
`;

export const TaskChangeStatusItem = styled.li`
  font-size: 15px;
  &:hover{
    cursor: pointer;
    color: ${eColors.SECONDARY};
  }
`;