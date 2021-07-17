import styled from "styled-components";
import {eColors} from "../../GlobalStyles";


export const NotificationBar = styled.div`
  position: fixed;
  top: 180px;
  height: 0;
  right: 60px;
`;

export const NotificationMessage = styled.div`
  width: 300px;
  min-height: 50px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  padding: 20px;
  background-color: ${eColors.PRIMARY};
  border-radius: 15px;
  opacity: .8;
  &:hover{
    opacity: 1;
  }
`;

export const NotificationsClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${eColors.BLANK};
  cursor: pointer;
  &:hover{
    opacity: .9;
  }
`;

export const NotificationsText = styled.p`
    font-weight: 600;
    color: ${eColors.BLANK};
    font-size: 14px;
`;