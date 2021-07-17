import {Dispatch} from "redux";
import {is_iTask, is_iTaskErrors, TaskActions, TaskActionType} from "../../types/task";
import {taskApi} from "../../http/taskApi";
import {SiteActions, SiteActionTypes} from "../../types/site";
import {v4} from 'uuid';

export const getCurrentPage = (page:number) => async (dispatch: Dispatch<TaskActions>):Promise<void> => {
        dispatch({type: TaskActionType.GET_CURRENT_PAGE, payload: page});
}

export const isVisibleState = (status: boolean) => (dispatch: Dispatch<TaskActions>):void => {
    dispatch({type: TaskActionType.SET_VISIBLE, payload: status});
}

export const loadTasks = (page: number = 1) => async (dispatch: Dispatch<TaskActions | SiteActions>):Promise<void> => {
    try{
        await dispatch({type: SiteActionTypes.LOADING_TOGGLE, payload: true});
        const tasks = await taskApi.get(page);
        if(tasks.status==='ok') {
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
        const task = await taskApi.create(email, username, text);
        if(task.status === 'ok' && is_iTask(task.message)) {
            dispatch({type: TaskActionType.SET_VISIBLE, payload: false});
            dispatch({type: TaskActionType.CREATE_TASK, payload: task.message});
            dispatch({type: TaskActionType.GET_ERRORS, payload: {}});
            dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: 'Задача добавлена'}});
            loadTasks();
        }else if(task.status === 'error'){
            dispatch({type: TaskActionType.GET_ERRORS, payload: task.message});
        } else dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: 'Неизвестная ошибка'}});
    }catch (err) {
        dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: err.message || String(err)}});
    }
}
