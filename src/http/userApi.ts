import {$host, createData, eRequests, errorResponse} from "./settings";
import {iLogin} from "../types/user";

export const userApi = {
    login : async (username:string, password:string):Promise<iLogin> => {
        try{
            const formData = createData({username, password});
            const {data} = await $host.post(eRequests.LOGIN, formData);
            return data;
        }catch (err) {
            // eslint-disable-next-line no-throw-literal
            throw errorResponse(err);
        }
    }
}