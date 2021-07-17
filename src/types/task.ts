export enum TaskActionType {
    CREATE_TASK = 'TASK.CREATE_TASK',
    EDIT_TASK = 'TASK.EDIT_TASK',
    SUCCESS_TASK = 'TASK.SUCCESS_TASK',
    GET_TASKS = 'TASK.GET_TASKS',
    GET_ERRORS = 'TASK.GET_ERRORS',
    GET_CURRENT_PAGE = 'TASK.GET_CURRENT_PAGE',
    SET_VISIBLE = 'TASK.SET_VISIBLE'
}

export interface iTask{
    id: number,
    username: string;
    email: string;
    text: string;
}

//interface errors object in message
export interface iTaskErrors {
    email?: string | null;
    username?: string | null;
    text?: string | null;
}

// interface for state task loaded
interface iTaskMessage {
    tasks: iTask[],
    total_task_count: number
}

// interface create task
export interface iTaskCreateRequest{
    message: iTask;
    status: string | iTaskErrors;
}

// interface get tasks
export interface iTaskRequest{
    message: iTaskMessage | iTaskErrors;
    status: string;
}

// interface initialState
export interface iTaskState {
    tasks: iTask[];
    currentPage: number;
    total_task_count: number;
    error: iTaskErrors;
    isVisible: boolean
}

// =====> Actions interfaces //

interface createTaskAction {
    type: TaskActionType.CREATE_TASK;
    payload: iTask
}

interface editTaskAction {
    type: TaskActionType.EDIT_TASK;
    payload: iTaskState;
}

interface successTaskAction {
    type: TaskActionType.SUCCESS_TASK;
}

interface getTasksAction {
    type: TaskActionType.GET_TASKS;
    payload: iTaskMessage
}

interface getErrorsTaskAction {
    type: TaskActionType.GET_ERRORS;
    payload: iTaskErrors
}

interface getCurrentPageTaskAction {
    type: TaskActionType.GET_CURRENT_PAGE;
    payload: number
}

interface setVisibleTaskAction {
    type: TaskActionType.SET_VISIBLE;
    payload: boolean
}

export type TaskActions =
    editTaskAction
    | successTaskAction
    | getTasksAction
    | createTaskAction
    | getErrorsTaskAction
    | getCurrentPageTaskAction
    | setVisibleTaskAction;


// checks
export function is_iTask (obj:any): obj is iTask{
    return obj.message !==undefined;
}

export function is_iTaskErrors (obj:any): obj is iTaskErrors{
    return obj.id === undefined;
}
