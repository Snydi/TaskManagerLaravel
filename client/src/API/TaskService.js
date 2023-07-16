import { $authHost, $host } from "./index";
export default class TaskService {
  static async getAll() {
    const taskResponse = await $authHost.get("/api/tasks");
    const groupsResponse = await $authHost.get("/api/groups");
    return [taskResponse, groupsResponse];
  }
  static async login(data) {
    const response = await $host.post("https://dusiol.serveo.net/api/auth/login", data);
    return response.data.token;
  }
  static async register(data) {
    const response = await $host.post("https://dusiol.serveo.net/api/auth/register", data);
    return response.data;
  }

  static async add({ ...args }) {
    const response = await $authHost.post("https://dusiol.serveo.net/api/tasks/store", { ...args });
    return response.data;
  }

  static async addGroup({ ...args }) {
    const response = await $authHost.post("https://dusiol.serveo.net/api/groups/store", { ...args });
    return response.data;
  }

  static async remove(arr, obj) {
    await $authHost.delete(`https://dusiol.serveo.net/api/${obj}/${arr.id}`);
  }

  static async update(id, updated, obj) {
    await $authHost.put(`https://dusiol.serveo.net/api/${obj}/${id}`, updated);
  }
}
