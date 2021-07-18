import {
    iFilterMaskTask,
    is_SortDirectionTaskType,
    iTaskCreateRequest,
    SortDirectionTaskType,
    SortFieldTaskType
} from "../types/task";
import {$host, createData, eRequests, errorResponse} from "./settings";


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
    edit : async (id: number, text:string, status: number) => {
        try{
            const formData = createData({text, status, token: localStorage.getItem('token')});
            const {data} = await $host.post(`${eRequests.TASK_EDIT}${id}/`, formData);
            return data;
        }catch (err) {
            // eslint-disable-next-line no-throw-literal
            throw errorResponse(err);
        }
    },
    get : async (page: number = 1, sortDirection: SortDirectionTaskType | null, sortField: SortFieldTaskType=SortFieldTaskType.ID) => {
        try{
            const filters: iFilterMaskTask = {page, sort_field: sortField};
            if(is_SortDirectionTaskType(sortDirection)){
                filters.sort_direction = sortDirection;
            }
            const {data} = await $host.get(`${eRequests.TASKS_LOAD}`, {params: filters});
            return data;
        }catch (err){
            // eslint-disable-next-line no-throw-literal
            throw errorResponse(err);
        }
    }
}