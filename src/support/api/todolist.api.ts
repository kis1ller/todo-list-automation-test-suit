import axios from "axios";
import { AxiosInstance, AxiosResponse } from "axios";
import { todoApi } from "../../../properties";


export class TodoListApiV2Client {
    private client: AxiosInstance;
    constructor() {
        this.client = axios.create({
            baseURL: todoApi.baseUrlV2,
            headers: {
                "Content-Type": "application/json",
                "X-Request-Id": "a522f494-92ce-44e9-b1a3-f891baed8d60",
                Authorization: `Bearer ${todoApi.token}`,
            }
        });
    }

    public postTodolistProject(data: string):
        Promise<AxiosResponse<any, any>> {
        return this.client.post("/projects", JSON.parse(data));
    }

    public deleteTodolistProject(id: string):
        Promise<AxiosResponse<any, any>> {
        return this.client.delete(`/projects/${id}`);
    }
}


