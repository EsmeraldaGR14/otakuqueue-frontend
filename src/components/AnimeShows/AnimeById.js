import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAnimeByIdAPI } from "../../utilities/API/AnimeListAPI";

function AnimeById() {
  let { animeId } = useParams();

  let navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    (async function getAnimeById() {
      try {
        let { data } = await getAnimeByIdAPI(animeId);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [animeId]);

  async function addToWatchlist() {
    navigate(`/anime-list/${animeId}/add-to-watchlist`);
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{data.title}</h2>
        <span className="card-subtitle">
          <strong>Rating: {data.rating}</strong>
        </span>
      </div>
      <div className="card-body">
        <p className="card-text">{data.description}</p>
        <p className="card-text">Genre: {data.genre}</p>
        <p className="card-text">Release Date: {data.release_date}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-secondary" onClick={goBack}>
          BACK
        </button>
        <button className="btn btn-primary" onClick={addToWatchlist}>
          ADD TO MY WATCHLIST
        </button>
      </div>
    </div>
  );
}

export default AnimeById;
