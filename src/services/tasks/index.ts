import { DB_BASE_URL } from "../../constants";
import { Task } from "../../types";

const getAll = () => {};

const get = (id: string) => {};

type Payload = Omit<Task, "id">;

const add = async(task: Payload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(task),
      };
    
      const response = await fetch(`${DB_BASE_URL}/tasks.json`, options);
      const data = await response.json();
    
    //   if (data.name) {
    //     return true;
    //   } else {
    //     return false;
    //   }
};

export const tasksService = { getAll, get, add };