import {UserActions, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import {userApi} from "../../http/userApi";
import {SiteActions, SiteActionTypes} from "../../types/site";
import {v4} from "uuid";

export const toggleLoginFormActionCreator = () => (dispatch: Dispatch<UserActions>): void => {
    dispatch({type: UserActionTypes.TOGGLE_LOGIN_FORM});
}
export const logoutUserActionCreator = ()=> (dispatch: Dispatch<UserActions>):void =>{
    dispatch({type:UserActionTypes.LOGOUT_USER});
}
export const loginUserActionCreator = (login: string, password: string) => async (dispatch: Dispatch<UserActions | SiteActions>): Promise<void>  => {
    try{
        const candidate= await userApi.login(login, password);
        if (candidate.status === 'ok' && typeof candidate.message == 'object') {
            localStorage.setItem('token', String(candidate.message.token));
           dispatch({type: UserActionTypes.LOGIN_USER});
           dispatch({type: UserActionTypes.TOGGLE_LOGIN_FORM});
            // clean errors
           dispatch({type: UserActionTypes.SET_STATUS, payload: null });
            dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: 'С возвращением Admin 👋!'}});
        }else{
            dispatch({type: UserActionTypes.SET_STATUS, payload: typeof(candidate.message)==='object' ? candidate.message : null })
        }
    }catch (err){
        dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: err.message || String(err)}});
    }
}

export const checkUserActionCreator = () =>async (dispatch: Dispatch<UserActions | SiteActions>) => {
    dispatch({type: SiteActionTypes.LOADING_TOGGLE, payload:true});
    if(localStorage.getItem('token')) dispatch({type: UserActionTypes.CHECK_USER});
    dispatch({type: SiteActionTypes.LOADING_TOGGLE, payload:false});
}