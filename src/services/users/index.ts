import { DB_BASE_URL } from "../../constants";
import { mapToArray } from "../../helpers/mapToArray";
import { User } from "../../types";

const getAll = async (search?: string): Promise<User[]> => {
  const response = await fetch(`${DB_BASE_URL}/users.json`);
  const data = await response.json();
  let users = mapToArray<User>(data);
  users = users.map(elem => ({...elem, birthDate: new Date(elem.birthDate)}))
  return search 
      ? users
          .filter((elem) => elem.name.includes(search))
  
      : users;

};

const get = async (id: string): Promise<User> => {
  const response = await fetch(`${DB_BASE_URL}/users/${id}.json`);
  const data = await response.json();

  return { id, ...data };
};


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

const remove = async (id: string) => {
  const options = {
    method: "DELETE",
  };

  await fetch(`${DB_BASE_URL}/users/${id}.json`, options);
};

const update = async ({ id, name, lastname, email, birthDate, password}: User) => {
  const options = {
    method: "PUT",
    body: JSON.stringify({ name, lastname, email, birthDate, password }),
  };

  const response = await fetch(`${DB_BASE_URL}/users/${id}.json`, options);
  const data = await response.json();

  if (data.name) {
    return true;
  } else {
    return false;
  }
};

export const usersService = { getAll, get, add, remove, update };
