import { DB_BASE_URL } from "../../constants";
import { mapToArray } from "../../helpers/mapToArray";
import { User } from "../../types";

const getAll = async (search?: string): Promise<User[]> => {
  const response = await fetch(`${DB_BASE_URL}/users.json`);
  const data = await response.json();
  const users = mapToArray<User>(data);
  return search 
      ? users
          .filter((elem) => elem.name.includes(search))
  
      : users;

};



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
