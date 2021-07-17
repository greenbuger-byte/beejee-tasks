import {Dispatch} from "redux";
import {SiteActions, SiteActionTypes} from "../../types/site";
import {v4} from 'uuid';

export const setLoading = (status: boolean) => (dispatch: Dispatch<SiteActions>) =>{
    dispatch({type: SiteActionTypes.LOADING_TOGGLE, payload: status});
}

export const createNotification = (message: string) =>async (dispatch: Dispatch<SiteActions>):Promise<void> => {
    dispatch({type: SiteActionTypes.NOTIFICATION_CREATE, payload: {id: String(v4()), text: message}})
}

export const removeNotification = (id: string) =>async (dispatch: Dispatch<SiteActions>):Promise<void> => {
    dispatch({type: SiteActionTypes.NOTIFICATION_REMOVE, payload: id} );
}