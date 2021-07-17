import React from 'react';
import {NotificationBar, NotificationMessage, NotificationsClose, NotificationsText} from "./Notifications.elements";
import BxXIcon from "../Icons/BxXIcon";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useActions} from "../../hook/useActions";

const Notifications  = () => {
    const {notification} = useTypedSelector(state=> state.site);
    const {removeNotification} = useActions();
    const removeByTimeout = (id:string):void => {
        setTimeout(removeNotification(id), 3000);
    }
    notification.map(n => removeByTimeout(n.id));
    return (
        <NotificationBar>
            {notification.map( n =>
                <NotificationMessage>

                        <NotificationsText>
                            {n.text}
                        </NotificationsText>
                    <NotificationsClose>
                        <BxXIcon onClick={() => removeNotification(n.id)}/>
                    </NotificationsClose>
                </NotificationMessage>
            )}

        </NotificationBar>
    );
};

export default Notifications;