import React, { useEffect, useState } from "react";
import {
  deleteWatchlistShowAPI,
  getAllWatchlistAPI,
} from "../../utilities/API/WatchlistAPI";
import { useUserContext } from "../../utilities/Context/UserContext";
import { getAnimeByIdAPI } from "../../utilities/API/AnimeListAPI";
import { useNavigate } from "react-router-dom";
import { useWatchlistContext } from "../../utilities/Context/WatchlistContext";

function Watchlist() {
  const { usersData } = useUserContext();
  const { setWatchlistItem } = useWatchlistContext();
  const navigate = useNavigate();

  const [watchlistData, setWatchlistData] = useState([]);
  const [animeInfo, setAnimeInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllWatchlistAPI(usersData.id);
        setWatchlistData(data);

        const info = await Promise.all(
          data.map(({ id, anime_id, current_episode, status, is_favorite }) =>
            getAnimeInfo(id, anime_id, is_favorite, current_episode, status)
          )
        );

        setAnimeInfo(info);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [usersData.id]);

  async function getAnimeInfo(
    id,
    anime_id,
    is_favorite,
    current_episode,
    status
  ) {
    try {
      const { data } = await getAnimeByIdAPI(anime_id);
      return {
        id,
        title: data.title,
        is_favorite,
        current_episode,
        status,
        anime_id,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async function removeFromWatchlist(id) {
    try {
      console.log(id, usersData);
      // await deleteWatchlistShowAPI(id, animeInfo.anime_id);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSelectedAnime(anime) {
    setWatchlistItem(anime);
    navigate(`/watchlist/${anime.id}`);
  }

  return (
    <div className="container mt-5">
      <h1>{usersData.username}'s Watchlist</h1>
      <div className="row">
        {animeInfo.map((anime, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelectedAnime(anime)}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{anime.title}</h5>
                {anime.is_favorite && <span className="text-warning">⭐</span>}
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromWatchlist(anime.id)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
