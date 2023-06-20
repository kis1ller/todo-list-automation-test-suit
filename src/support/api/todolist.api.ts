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

    public async postTodolistProject(data: string):
        Promise<AxiosResponse<any, any>> {
        return this.client.post("/projects", JSON.parse(data));
    }

    public async deleteTodolistProject(id: string):
        Promise<AxiosResponse<any, any>> {
        return this.client.delete(`/projects/${id}`);
    }

    public async getTodolistTasks():
        Promise<AxiosResponse<any, any>> {
        return this.client.get("/tasks");
    }

    public async postTodolistTask(label: string):
        Promise<AxiosResponse<any, any>> {
        try {
            const projectId = global.projectIds[0];
            const data = {
                content: label,
                project_id: projectId
            };
            return await this.client.post("/tasks", data);
        } catch {
            throw Error;
        }
    }
}


