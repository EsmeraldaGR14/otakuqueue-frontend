/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getAllWatchlistAPI } from "../../utilities/API/WatchlistAPI";
import { useUserContext } from "../../utilities/Context/UserContext";
import { getAnimeByIdAPI } from "../../utilities/API/AnimeListAPI";
import { useNavigate } from "react-router-dom";
import { useWatchlistContext } from "../../utilities/Context/WatchlistContext";

function Watchlist() {
  const [data, setData] = useState([]);
  const [animeInfo, setAnimeInfo] = useState([]);

  const { setWatchlistItem } = useWatchlistContext();

  const { usersData } = useUserContext();

  let navigate = useNavigate();

  // console.log("STARTING OVER");

  useEffect(() => {
    (async function fetchData() {
      try {
        let { data } = await getAllWatchlistAPI(usersData.id);
        setData(data);
        console.log("watchlistData", data);

        const info = await Promise.all(
          data.map(({ id, anime_id, current_episode, status, is_favorite }) =>
            getAnimeInfo(id, anime_id, is_favorite, current_episode, status)
          )
        );
        console.log("data", data);
        setAnimeInfo(info);
        console.log("info", info);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [usersData.id]);

  async function getAnimeInfo(
    id,
    anime_id,
    is_favorite,
    current_episode,
    status
  ) {
    try {
      let { data } = await getAnimeByIdAPI(anime_id);
      console.log("anime_id", anime_id);
      console.log("data", data);
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
    } catch (error) {
      console.error(error);
    }
  }

  function handleSelectedAnime({
    id,
    anime_id,
    current_episode,
    status,
    is_favorite,
    title,
  }) {
    setWatchlistItem({
      id,
      anime_id,
      current_episode,
      status,
      is_favorite,
      title,
    });
    console.log("watchlist item", {
      anime_id,
      current_episode,
      status,
      is_favorite,
      title,
    });
    navigate(`/watchlist/${id}`);
  }

  // console.log(data);
  return (
    <div>
      {animeInfo.map(
        (
          { id, anime_id, current_episode, status, is_favorite, title },
          index
        ) => (
          <div key={index}>
            <div
              onClick={() =>
                handleSelectedAnime({
                  id,
                  anime_id,
                  current_episode,
                  status,
                  title,
                  is_favorite,
                })
              }
            >
              <div>Title: {title}</div>
              <div>{is_favorite ? "⭐" : ""}</div>
            </div>

            <button onClick={() => removeFromWatchlist(id)}>REMOVE</button>
          </div>
        )
      )}
    </div>
  );
}

export default Watchlist;
