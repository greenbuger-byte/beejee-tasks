export enum SiteActionTypes {
    LOADING_TOGGLE = 'SITE.LOADING_TOGGLE',
    NOTIFICATION_CREATE = 'SITE.CREATE_NOTIFICATION',
    NOTIFICATION_REMOVE = 'SITE.REMOVE_NOTIFICATION'
}

export interface iNotification {
    id: string;
    text: string
}

export interface iSiteState {
    loading: boolean;
    errors: string | null;
    notification: iNotification[]
}

interface toggleLoadingSiteAction {
    type: SiteActionTypes.LOADING_TOGGLE;
    payload: boolean;
}

interface notificationCreateSiteAction {
    type: SiteActionTypes.NOTIFICATION_CREATE
    payload: iNotification
}

interface notificationRemoveAction {
    type: SiteActionTypes.NOTIFICATION_REMOVE;
    payload: string
}

export type SiteActions =
    toggleLoadingSiteAction
    | notificationCreateSiteAction
    | notificationRemoveAction;