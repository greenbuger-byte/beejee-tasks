import {iTaskState, SortFieldTaskType, TaskActions, TaskActionType} from "../../types/task";

const initialState: iTaskState = {
    currentPage: 1,
    total_page: 0,
    tasks: [],
    error: {},
    isVisible: false,
    sortDirection: null,
    sortField: SortFieldTaskType.ID,
    editArea: false
}

export const taskReducer = (state:iTaskState = initialState, action: TaskActions):iTaskState =>{
    switch (action.type) {
        case TaskActionType.CREATE_TASK:
            return {...state, tasks:[...state.tasks, action.payload], currentPage: state.total_page};
        case TaskActionType.EDIT_TASK:
            return {...state, tasks: state.tasks.map(task => task.id === action.payload.id ? task = action.payload : task) };
        case TaskActionType.GET_TASKS:
            return {...state, tasks: action.payload.tasks, total_page: action.payload.total_page};
        case TaskActionType.SUCCESS_TASK:
            return {...state};
        case TaskActionType.GET_ERRORS:
            return {...state, error: action.payload};
        case TaskActionType.GET_CURRENT_PAGE :
            return {...state, currentPage: action.payload};
        case TaskActionType.SET_VISIBLE:
            return {...state, isVisible: action.payload};
        case TaskActionType.SORT_DIRECTION:
            return {...state, sortDirection: action.payload};
        case TaskActionType.SORT_FIELD:
            return {...state, sortField: action.payload};
        default:
            return {...state};
    }
}