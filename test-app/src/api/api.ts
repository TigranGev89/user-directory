import { User } from "../types/types";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://fakestoreapi.com/users");
  const data: User[] = await response.json();
  return data.slice(0, 9);
};
