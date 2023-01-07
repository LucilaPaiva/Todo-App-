import { DB_BASE_URL } from "../../constants";
import { User } from "../../types";

const getAll = () => {};

const get = (id: string) => {};

type Payload = Omit<User, "id">;

const add = async(user: Payload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(user),
      };
    
      const response = await fetch(`${DB_BASE_URL}/users.json`, options);
      const data = await response.json();
    
      if (data.name) {
        return true;
      } else {
        return false;
      }
};

export const usersService = { getAll, get, add };
