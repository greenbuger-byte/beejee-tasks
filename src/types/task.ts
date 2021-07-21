export enum TaskActionType {
    CREATE_TASK = 'TASK.CREATE_TASK',
    EDIT_TASK = 'TASK.EDIT_TASK',
    SUCCESS_TASK = 'TASK.SUCCESS_TASK',
    GET_TASKS = 'TASK.GET_TASKS',
    GET_ERRORS = 'TASK.GET_ERRORS',
    GET_CURRENT_PAGE = 'TASK.GET_CURRENT_PAGE',
    SET_VISIBLE = 'TASK.SET_VISIBLE',
    SORT_FIELD = 'TASK.SORT_FIELD',
    SORT_DIRECTION = 'TASK.SORT_DIRECTION',
}

export enum SortFieldTaskType {
    ID= 'id',
    USERNAME = 'username',
    EMAIL = 'email',
    STATUS = 'status'
}

export enum SortFieldTaskTypeRu {
    ID = 'По умолчанию',
    USERNAME = 'По имени',
    EMAIL = 'По email',
    STATUS = 'По статусу'
}

export enum SortDirectionTaskType {
    ASC = 'asc',
    DESC = 'desc'
}

export enum TaskStatuses {
    STATUS_0 = 'задача не выполнена',
    STATUS_1 = 'задача не выполнена, отредактирована админом',
    STATUS_10 = 'задача выполнена',
    STATUS_11 = 'задача отредактирована админом и выполнена'
}

export enum TaskColorStatuses {
    STATUS_0 = 'whitesmoke',
    STATUS_1 = '#c2185b',
    STATUS_10 = '#ffd600',
    STATUS_11 = '#f57f17'
}

export interface iFilterMaskTask{
    page: number;
    sort_direction?: SortDirectionTaskType;
    sort_field: SortFieldTaskType
}


export interface iTask{
    id: number,
    username: string;
    email: string;
    text: string;
    status: number
}

export interface iTaskErrors {
    email?: string | null;
    username?: string | null;
    text?: string | null;
}

interface iTaskMessage {
    tasks: iTask[],
    total_page: number
}

export interface iTaskCreateRequest{
    message: iTask;
    status: string | iTaskErrors;
}

export interface iTaskState {
    tasks: iTask[];
    currentPage: number;
    total_page: number;
    error: iTaskErrors;
    isVisible: boolean;
    sortField: SortFieldTaskType;
    sortDirection: SortDirectionTaskType | null;
    editArea: boolean
}

// =====> Actions interfaces //

interface createTaskAction {
    type: TaskActionType.CREATE_TASK;
    payload: iTask
}

interface editTaskAction {
    type: TaskActionType.EDIT_TASK;
    payload: iTask;
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

interface sortFieldTaskAction {
    type: TaskActionType.SORT_FIELD;
    payload: SortFieldTaskType;
}

interface sortDirectionTaskAction {
    type: TaskActionType.SORT_DIRECTION;
    payload: SortDirectionTaskType | null
}



export type TaskActions =
    editTaskAction
    | successTaskAction
    | getTasksAction
    | createTaskAction
    | getErrorsTaskAction
    | getCurrentPageTaskAction
    | setVisibleTaskAction
    | sortFieldTaskAction
    | sortDirectionTaskAction;


// check types
export function is_SortDirectionTaskType (obj: any): obj is SortDirectionTaskType {
    return obj !== null && obj !== undefined;
}
