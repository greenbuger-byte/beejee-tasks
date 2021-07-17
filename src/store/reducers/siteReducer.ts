import {iSiteState, SiteActions, SiteActionTypes} from "../../types/site";

const initialState: iSiteState = {
    loading:false,
    errors: null,
    notification: []
}

export const siteReducer = (state: iSiteState = initialState, action: SiteActions) => {
    switch (action.type) {
        case SiteActionTypes.LOADING_TOGGLE:
            return {...state, loading: action.payload};
        case SiteActionTypes.NOTIFICATION_CREATE:
            return {...state, notification: [action.payload, ...state.notification] };
        case SiteActionTypes.NOTIFICATION_REMOVE:
            return {...state, notification: state.notification.filter(n => n.id!== action.payload)}
        default:
            return {...state};
    }
}