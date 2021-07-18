import {Dispatch} from "redux";
import {
    iTask,
    SortDirectionTaskType,
    SortFieldTaskType,
    TaskActions,
    TaskActionType
} from "../../types/task";
import {taskApi} from "../../http/taskApi";
import {SiteActions, SiteActionTypes} from "../../types/site";
import {v4} from 'uuid';

export const getCurrentPage = (page:number) => async (dispatch: Dispatch<TaskActions>):Promise<void> => {
        dispatch({type: TaskActionType.GET_CURRENT_PAGE, payload: page});
}

export const changeSortDirection = (sortDirection: SortDirectionTaskType | null ) => (dispatch: Dispatch<TaskActions>): void => {
    dispatch({type: TaskActionType.SORT_DIRECTION, payload: sortDirection})
}

export const changeSortField = (sortField: SortFieldTaskType) => (dispatch: Dispatch<TaskActions>): void => {
    dispatch({type: TaskActionType.SORT_FIELD, payload: sortField})
}

export const isVisibleState = (status: boolean) => (dispatch: Dispatch<TaskActions>):void => {
    dispatch({type: TaskActionType.SET_VISIBLE, payload: status});
}

export const loadTasks = (page: number = 1, sortDirection: SortDirectionTaskType | null,  sortField: SortFieldTaskType = SortFieldTaskType.ID) =>
    async (dispatch: Dispatch<TaskActions | SiteActions>):Promise<void> => {
    try{
        await dispatch({type: SiteActionTypes.LOADING_TOGGLE, payload: true});
        const tasks = await taskApi.get(page, sortDirection, sortField);
        if(tasks.status==='ok') {
           tasks.message['total_page'] = Math.ceil(tasks.message.total_task_count / 3);
           await dispatch({type: TaskActionType.GET_TASKS, payload: tasks.message});
        }else{
          await  dispatch({type: TaskActionType.GET_ERRORS, payload: tasks.message})
        }
    }catch (err) {
       await dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: err.message || String(err)}});
    }finally
    {
        dispatch({type: SiteActionTypes.LOADING_TOGGLE, payload: false});
    }

}

export const createTask = (email: string, username: string, text: string) =>
    async (dispatch: Dispatch<TaskActions | SiteActions>):Promise<void> => {
    try{
        await dispatch({type: TaskActionType.GET_ERRORS, payload: {}});
        const task = await taskApi.create(email, username, text);
        if(task.status === 'ok' ) {
            dispatch({type: TaskActionType.SET_VISIBLE, payload: false});
            dispatch({type: TaskActionType.CREATE_TASK, payload: task.message});
            dispatch({type: TaskActionType.GET_ERRORS, payload: {}});
            dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: 'Задача добавлена'}});
        }else if(task.status === 'error'){
            dispatch({type: TaskActionType.GET_ERRORS, payload: task.message});
        } else dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: 'Неизвестная ошибка'}});
    }catch (err) {
        dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: err.message || String(err)}});
    }
}

export const editTask  = (task: iTask) =>async (dispatch: Dispatch<TaskActions | SiteActions >):Promise<void> => {
   try{
       const editStatus= await taskApi.edit(task.id, task.text, task.status);
       if(editStatus.status === 'ok') {
           await  dispatch({type: TaskActionType.EDIT_TASK, payload: task});
           dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: 'Задача отредактирована 👍'}});
       }else {
           dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: 'Не удалось отредактировать задачу 😔'}});
       }
    }catch (err) {
        dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: err.message || String(err)}});
    }
}
