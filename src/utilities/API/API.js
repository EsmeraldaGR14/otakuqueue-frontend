import Axios from "../API/Axios";

// animelist
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

// user

async function createYourUser() {
  try {
    await Axios.post(`/`);
  } catch (error) {
    return error;
  }
}

// user-watchlist
async function addToWatchlistAPI(id, data) {
  try {
    await Axios.post(`/users`, id, data);
  } catch (error) {
    return error;
  }
}

export {
  getAllAnimeListAPI,
  getAnimeByIdAPI,
  addToWatchlistAPI,
  createYourUser,
};
