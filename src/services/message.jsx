import axios from "axios";
const baseUrl = "/api/messages";

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const messageService = { getAll, create };

export default messageService;
