import {iUserState, UserActions, UserActionTypes} from "../../types/user";

const initialState: iUserState = {
    status: null,
    login: false,
    loginModal: false
}

export const userReducer = (state: iUserState = initialState, action: UserActions):iUserState => {
    switch (action.type){
        case UserActionTypes.SET_STATUS:
            return {...state, status: action.payload};
        case UserActionTypes.LOGIN_USER:
            return  {...state, login: true, status: null};
        case UserActionTypes.LOGOUT_USER:
            return {...state, login: false, status: null};
        case UserActionTypes.CHECK_USER:
            return {...state, login: true, status: null};
        case UserActionTypes.TOGGLE_LOGIN_FORM:
            return {...state, loginModal: !state.loginModal}
        default:
            return {...state};
    }
}