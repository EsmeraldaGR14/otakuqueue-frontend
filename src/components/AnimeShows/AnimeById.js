// AnimeById.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteAnimeByIdAPI,
  getAnimeByIdAPI,
} from "../../utilities/API/AnimeListAPI";
import { formatDate } from "../../utilities/helpers/formatDateHandler";

function AnimeById() {
  let { animeId } = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    async function getAnimeById() {
      try {
        let { data } = await getAnimeByIdAPI(animeId);
        setData(data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    getAnimeById();
  }, [animeId]);

  async function removeById(id) {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteAnimeByIdAPI(id);
        alert("Item deleted successfully.");
        navigate("/anime-list");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="container mt-5">
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
          <p className="card-text">
            Release Date: {formatDate(data.release_date)}
          </p>
        </div>

        <div className="card-footer">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            BACK
          </button>
          <button
            className="btn btn-primary"
            onClick={async () =>
              navigate(`/anime-list/${animeId}/add-to-watchlist`)
            }
          >
            ADD TO MY WATCHLIST
          </button>
          <button
            className="btn btn-warning"
            onClick={() => navigate(`/anime-list/${animeId}/edit`)}
          >
            EDIT
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeById(animeId)}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeById;
