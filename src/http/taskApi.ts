import {iTaskCreateRequest, iTaskRequest} from "../types/task";
import { $host, createData, eRequests, errorResponse } from "./settings";


export const taskApi = {
    create : async (email:string, username: string, text: string):Promise<iTaskCreateRequest> => {
        try {
            const formData = createData({email, username, text});
            const {data} = await $host.post(eRequests.TASK_CREATE, formData);
            return data;
        }catch (err){
            // eslint-disable-next-line no-throw-literal
            throw errorResponse(err);
        }
    },
    get : async (page: number = 1) => {
        try{
            const {data} = await $host.get(`${eRequests.TASKS_LOAD}?page=${page}`);
            return data;
        }catch (err){
            // eslint-disable-next-line no-throw-literal
            throw errorResponse(err);
        }
    }
}