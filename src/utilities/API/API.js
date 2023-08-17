import Axios from "../API/Axios";

async function getAllAnimeList() {
  try {
    let result = await Axios.get(`/anime-shows`);
    return result;
  } catch (error) {
    return error;
  }
}

export { getAllAnimeList };
