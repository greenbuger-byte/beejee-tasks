import axios, {AxiosRequestConfig, AxiosError} from "axios";
export interface ServerError {
    message: string
}

export const createData = (form:any):FormData => {
    const formData = new FormData();
    Object.keys(form).forEach(key => {
        formData.append(key, form[key]);
    });
    return formData;
}

export enum eRequests {
    LOGIN = 'login/',
    TASK_CREATE = 'create/',
    TASK_EDIT = 'edit/',
    TASKS_LOAD = ''
}

const errorResponse = (error: AxiosError<any>):string=> {
    if (error.response) {
        console.log(error.response.data.message);
        return error.response.data.message;
    }else{
        return error.message;
    }
}

const developerInterceptor = (config: AxiosRequestConfig) : AxiosRequestConfig => {
    if(config.url?.indexOf('?')===-1) config.url = config.url + '?developer=Denisenko';
    else config.url = config.url + '&developer=Denisenko';
    return config;
}

const $host = axios.create({ baseURL: process.env.REACT_APP_SERVERHOST,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    } });

$host.interceptors.request.use(developerInterceptor);

export {$host, errorResponse};