/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAnimeByIdAPI } from "../../utilities/API/API";

function AnimeById() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    (async function getAnimeById() {
      try {
        let { data } = await getAnimeByIdAPI(id);
        console.log(data);
        setData(data);
      } catch (error) {
        return error;
      }
    })();
  }, []);

  async function addToWatchlist() {}

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <h2>{data.title}</h2>{" "}
      <span>
        <strong>{data.rating}</strong>
      </span>
      <p>{data.description}</p>
      <p>{data.genre}</p>
      <p>{data.release_date}</p>
      <button onClick={goBack}>BACK</button>
      <button onClick={addToWatchlist}>ADD TO WATCHLIST</button>
    </div>
  );
}

export default AnimeById;
