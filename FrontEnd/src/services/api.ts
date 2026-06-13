import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("https://dummyjson.com/users");

  return response.data.users;
};
