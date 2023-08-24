import Axios from "./Axios";

async function addToWatchlistAPI(id, animeId, data) {
  try {
    await Axios.post(`/users/${id}/watchlist`, animeId, data);
  } catch (error) {
    return error;
  }
}

async function getAllWatchlistAPI(id) {
  try {
    let result = await Axios.get(
      `/users/${id}/watchlist/get-all-watchlist/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
}

async function getSingleWatchlist() {}

async function deleteWatchlistShowAPI() {
  try {
  } catch (error) {
    return error;
  }
}

export {
  addToWatchlistAPI,
  getAllWatchlistAPI,
  getSingleWatchlist,
  deleteWatchlistShowAPI,
};
