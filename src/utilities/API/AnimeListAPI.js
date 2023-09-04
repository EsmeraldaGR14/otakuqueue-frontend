import Axios from "./Axios";

async function getAllAnimeListAPI() {
  try {
    let result = await Axios.get(`/anime-shows`);
    return result;
  } catch (error) {
    return error;
  }
}

async function getAnimeByIdAPI(id) {
  try {
    let result = await Axios.get(`/anime-shows/${id}`);
    return result;
  } catch (error) {
    return error;
  }
}

async function addNewAnimeByIdApi(data) {
  try {
    console.log(data);
    await Axios.post(`/anime-shows`, data);
  } catch (error) {
    return error;
  }
}

async function editAnimeByIdAPI(id, data) {
  try {
    let result = await Axios.put(`/anime-shows/${id}`, data);
    console.log(result.data);
  } catch (error) {
    return error;
  }
}

async function deleteAnimeByIdAPI(id) {
  try {
    await Axios.delete(`/anime-shows/${id}`);
  } catch (error) {
    return error;
  }
}

export {
  getAllAnimeListAPI,
  getAnimeByIdAPI,
  addNewAnimeByIdApi,
  editAnimeByIdAPI,
  deleteAnimeByIdAPI,
};
