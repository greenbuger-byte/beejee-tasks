export enum UserActionTypes {
    LOGIN_USER = "USER.LOGIN_USER",
    LOGOUT_USER = "USER.LOGOUT_USER",
    SET_STATUS = "USER.SET_STATUS",
    TOGGLE_LOGIN_FORM = "USER.TOGGLE_LOGIN_FORM",
    CHECK_USER = "USER.CHECK_USER"
}

interface iMessageLogin{
    username: string;
    password: string;
    token?: string
}

export interface iUserState {
    login: boolean;
    status: iMessageLogin | null;
    loginModal: boolean
}

interface setStatusUserAction {
    type: UserActionTypes.SET_STATUS;
    payload: iMessageLogin | null;
}

interface loginUserAction {
    type: UserActionTypes.LOGIN_USER;
}

interface logoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
}

interface toggleLoginFormAction {
    type: UserActionTypes.TOGGLE_LOGIN_FORM;
}

interface checkAuthUserAction {
    type: UserActionTypes.CHECK_USER;
}

export interface iLogin {
    status: string;
    message: iMessageLogin | string;
}


export type UserActions =
      setStatusUserAction
    | loginUserAction
    | toggleLoginFormAction
    | logoutUserAction
    | checkAuthUserAction;