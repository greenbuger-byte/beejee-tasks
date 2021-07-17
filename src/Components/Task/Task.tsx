import React from 'react';
import {TaskBody, TaskContainer, TaskEmail, TaskName, TaskRow, TaskTitle} from "./Task.elements";
import {iTask} from "../../types/task";
import BxDotsVerticalRoundedIcon from "../Icons/BxDotsVerticalRoundedIcon";
interface iTaskProps {
    data: iTask;
}

const Task: React.FC<iTaskProps> = ({data}) => {
    return (
       <TaskContainer>
           <TaskBody>
               <TaskTitle>
                   <TaskName>
                       {data.username}
                       <TaskEmail>{data.email}</TaskEmail>
                   </TaskName>
                   <BxDotsVerticalRoundedIcon/>
               </TaskTitle>
               <TaskRow>
                   {data.text}
               </TaskRow>
           </TaskBody>
       </TaskContainer>
    );
};

export default Task;