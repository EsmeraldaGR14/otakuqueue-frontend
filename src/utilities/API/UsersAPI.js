import Axios from "./Axios";

async function getUserAPI(username) {
  try {
    let result = await Axios.get(`/users/${username}`);
    return result;
  } catch (error) {
    return error;
  }
}

async function createYourUserAPI(data) {
  try {
    await Axios.post(`/users`, data);
  } catch (error) {
    return error;
  }
}

export { createYourUserAPI, getUserAPI };
