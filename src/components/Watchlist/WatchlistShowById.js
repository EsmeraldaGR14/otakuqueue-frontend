import React, { useState, useEffect } from "react";
import { useWatchlistContext } from "../../utilities/Context/WatchlistContext";
import { getAnimeByIdAPI } from "../../utilities/API/AnimeListAPI";

// MAKE A FEATURE THAT ALLOWS YOU TO ORGANIZE BY THE STATUS
function WatchlistShowById() {
  const { watchlistItem } = useWatchlistContext();
  console.log("watchlist item", watchlistItem);

  const [animeData, setAnimeData] = useState({});

  useEffect(() => {
    (async function fetchAnimeData() {
      let { data } = await getAnimeByIdAPI(watchlistItem.anime_id);
      setAnimeData(data);
      console.log(data);
    })();
  }, [watchlistItem.anime_id]);

  useEffect(() => {
    (async function fetchDataWatchlist() {})();
  });

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

  return (
    <div>
      <span>{watchlistItem.is_favorite ? "⭐" : ""}</span>
      <h2>
        <strong>Title:</strong> {animeData.title}
      </h2>{" "}
      <p>
        <strong>Genre: {animeData.genre}</strong>
      </p>{" "}
      <span>
        <strong>Rating: </strong>
        {animeData.rating}
      </span>
      <p>
        <strong>Description: </strong>
        {animeData.description}
      </p>
      <p>
        <strong>Status:</strong> {watchlistItem.status}
      </p>
      {getCurrentEpisode()}
    </div>
  );
}

export default WatchlistShowById;
