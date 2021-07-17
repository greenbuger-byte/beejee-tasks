import { combineReducers } from 'redux'
import { userReducer } from "./userReducer";
import {siteReducer} from "./siteReducer";
import {taskReducer} from "./taskReducer";

export const rootReducer = combineReducers({
     user: userReducer,
     site: siteReducer,
     task: taskReducer
});

export type RootState = ReturnType<typeof rootReducer>