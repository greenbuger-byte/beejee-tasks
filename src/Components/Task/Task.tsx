import React, {ChangeEvent} from 'react';
import {
    TaskAdminStatusChanger,
    TaskBody,
    TaskChangeStatusBlock,
    TaskChangeStatusItem,
    TaskContainer,
    TaskEditBar,
    TaskEmail,
    TaskName,
    TaskRow,
    TaskStatus,
    TaskTitle,
    TaskTitleLeft
} from "./Task.elements";
import {iTask, TaskColorStatuses, TaskStatuses} from "../../types/task";
import BxDotsVerticalRoundedIcon from "../Icons/BxDotsVerticalRoundedIcon";
import {Avatar, IconButton, TextArea} from "../../GlobalStyles";
import avatarSvg from '../../assets/avatar.svg';
import EditIcon from "../Icons/EditIcon";
import BxXIcon from "../Icons/BxXIcon";
import SaveLineIcon from "../Icons/SaveLineIcon";
import {useActions} from "../../hook/useActions";
import {useTypedSelector} from "../../hook/useTypedSelector";

interface iTaskProps {
    data: iTask;
}

const Task: React.FC<iTaskProps> = ({data}) => {
    const [isEditArea, changeIsEditArea] = React.useState<boolean>(false);
    const [textEdit, setTextEdit] = React.useState<string>(data.text);
    const [isVisibleEditStatus, setIsVisibleEditStatus] = React.useState<boolean>(false);
    const [statusTask, setStatusTask] = React.useState<number>(0);
    const {editTask} = useActions();
    const {login} = useTypedSelector(state => state.user);
    const closeEditHandler = () => {
        setTextEdit(data.text);
        changeIsEditArea(false);
    }
    const editTaskHandler = async (st:number) => {
        setIsVisibleEditStatus(false);
        setStatusTask(st);
        const editedTask = data;
        if(editedTask.text !== textEdit){
            editedTask.text = textEdit;
            editedTask.status = st+1;
        }else {
            editedTask.status = st;
        }
        await editTask(editedTask);
        changeIsEditArea(false);
    }

    return (
       <TaskContainer>
           <TaskBody bgColor={TaskColorStatuses[`STATUS_${data.status}` as keyof typeof TaskColorStatuses]}>
               <TaskTitle>
                   <TaskStatus color={TaskColorStatuses[`STATUS_${data.status}` as keyof typeof TaskColorStatuses]}>
                         {TaskStatuses[`STATUS_${data.status}` as keyof typeof TaskStatuses]}
                   </TaskStatus>
                   <TaskTitleLeft>
                       <Avatar size={45} src={avatarSvg}/>
                       <TaskName>
                           {data.username}
                           <TaskEmail>{data.email}</TaskEmail>
                       </TaskName>
                   </TaskTitleLeft>
                   {login && <TaskAdminStatusChanger>
                       <IconButton onClick={()=>setIsVisibleEditStatus(prev => !prev)}>
                           <BxDotsVerticalRoundedIcon/>
                       </IconButton>
                       {isVisibleEditStatus &&
                       <TaskChangeStatusBlock>
                           <TaskChangeStatusItem onClick={ () => editTaskHandler(0) }>{TaskStatuses.STATUS_0}</TaskChangeStatusItem>
                           <TaskChangeStatusItem onClick={ () => editTaskHandler(10) }>{TaskStatuses.STATUS_10}</TaskChangeStatusItem>
                       </TaskChangeStatusBlock>
                       }
                   </TaskAdminStatusChanger> }
                   {login &&  <TaskEditBar>
                       {isEditArea
                           ? <>
                               <IconButton shadow={true} onClick={() => editTaskHandler(statusTask)}><SaveLineIcon/></IconButton>
                               <IconButton shadow={true} onClick={closeEditHandler}><BxXIcon/></IconButton>
                           </>
                           :
                           <IconButton shadow={true} onClick={() => changeIsEditArea(true)}><EditIcon/></IconButton>}
                   </TaskEditBar> }
               </TaskTitle>
               <TaskRow>
                   {isEditArea ? <TextArea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTextEdit(e.target.value)} height={185}>{textEdit}</TextArea> : <>{data.text}</>}
               </TaskRow>
           </TaskBody>
       </TaskContainer>
    );
};

export default Task;