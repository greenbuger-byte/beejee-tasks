import {iTaskState, TaskActions, TaskActionType} from "../../types/task";

const initialState: iTaskState = {
    currentPage:1,
    total_task_count:0,
    tasks: [],
    error: {},
    isVisible:false
}

export const taskReducer = (state:iTaskState = initialState, action: TaskActions):iTaskState =>{
    switch (action.type) {
        case TaskActionType.CREATE_TASK:
            return {...state, tasks:[...state.tasks, action.payload]};
        case TaskActionType.EDIT_TASK:
            return {...state};
        case TaskActionType.GET_TASKS:
            return {...state, tasks: action.payload.tasks, total_task_count: action.payload.total_task_count};
        case TaskActionType.SUCCESS_TASK:
            return {...state};
        case TaskActionType.GET_ERRORS:
            return {...state, error: action.payload};
        case TaskActionType.GET_CURRENT_PAGE :
            return {...state, currentPage: action.payload};
        case TaskActionType.SET_VISIBLE:
            return {...state, isVisible: action.payload}
        default:
            return {...state};
    }
}