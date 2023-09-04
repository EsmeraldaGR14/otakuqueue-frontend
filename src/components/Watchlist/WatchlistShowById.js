import React, { useState, useEffect } from "react";
import { useWatchlistContext } from "../../utilities/Context/WatchlistContext";
import { getAnimeByIdAPI } from "../../utilities/API/AnimeListAPI";
import { useNavigate } from "react-router-dom";

function WatchlistShowById() {
  const { watchlistItem } = useWatchlistContext();
  const [animeData, setAnimeData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAnimeData() {
      try {
        const { data } = await getAnimeByIdAPI(watchlistItem.anime_id);
        setAnimeData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAnimeData();
  }, [watchlistItem.anime_id]);

  function getCurrentEpisode() {
    if (watchlistItem.status === "want_to_watch") {
      return "";
    } else {
      return (
        <p>
          <strong>Current Episode:</strong> {watchlistItem.current_episode}
        </p>
      );
    }
  }

  function goToEdit() {
    navigate(`/watchlist/${watchlistItem.id}/edit`);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <strong>Title:</strong> {animeData.title}
            {watchlistItem.is_favorite && (
              <span className="text-warning ml-2">⭐</span>
            )}
          </h2>
        </div>
        <div className="card-body">
          <p>
            <strong>Genre: {animeData.genre}</strong>
          </p>
          <p>
            <strong>Rating: </strong>
            {animeData.rating}
          </p>
          <p>
            <strong>Description: </strong>
            {animeData.description}
          </p>
          <p>
            <strong>Status:</strong> {watchlistItem.status}
          </p>
          {getCurrentEpisode()}
        </div>
        <div className="card-footer">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            BACK
          </button>
          <button className="btn btn-primary" onClick={goToEdit}>
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchlistShowById;
