import React, {useEffect} from 'react';
import { TaskWrapper} from "./Task.elements";
import Task from "./Task";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useActions} from "../../hook/useActions";
import Loader from "../Loader/Loader";

const Tasks = () => {
    const {loading} = useTypedSelector(state=> state.site);
    const {tasks, currentPage, sortDirection, sortField} = useTypedSelector(state => state.task);
    const {loadTasks} = useActions();
    useEffect( () => {
        loadTasks(currentPage, sortDirection, sortField);
    }, [currentPage, sortField, sortDirection]);
    return (
        <>  {loading ? <Loader/> :
            <TaskWrapper>
                {tasks.map(task => <Task key={task.id} data={task}/>)}
            </TaskWrapper>}
        </>
    );
}

export default Tasks;