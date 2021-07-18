import React from 'react';
import {NotificationBar, NotificationMessage, NotificationsClose, NotificationsText} from "./Notifications.elements";
import BxXIcon from "../Icons/BxXIcon";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useActions} from "../../hook/useActions";

const Notifications  = () => {
    const {notification} = useTypedSelector(state=> state.site);
    const {removeNotification} = useActions();
    React.useEffect( () => {
       if(notification.length>0) setTimeout(() => removeNotification(notification[0].id), 3000);
    }, [notification]);
    return (
        <NotificationBar>
            {notification.map( n =>
                <NotificationMessage key={n.id}>
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