import Axios from "./Axios";

async function addToWatchlistAPI(id, animeId, data) {
  try {
    await Axios.post(`/users/${id}/watchlist`, animeId, data);
  } catch (error) {
    return error;
  }
}

async function editToWatchlistAPI(id, animeId, data) {
  try {
    await Axios.put(`/users/${id}/watchlist/`, animeId, data);
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

async function getSingleWatchlist(id) {}

async function deleteWatchlistShowAPI(id, watchlistId) {
  try {
    await Axios.delete(`/users/${id}/watchlist/${watchlistId}`);
  } catch (error) {
    return error;
  }
}

export {
  addToWatchlistAPI,
  editToWatchlistAPI,
  getAllWatchlistAPI,
  getSingleWatchlist,
  deleteWatchlistShowAPI,
};
