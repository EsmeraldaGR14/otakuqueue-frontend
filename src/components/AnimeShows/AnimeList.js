import React, { useState, useEffect } from "react";
import { getAllAnimeList } from "../../utilities/API/API";
import { useNavigate } from "react-router-dom";

function AnimeList() {
  const [data, setData] = useState([]);

  let navigate = useNavigate;

  async function animeList() {
    try {
      let { data } = await getAllAnimeList();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    animeList();
  }, []);

  function goToAnimeById(id) {
    navigate(`/anime-list/${id}`);
  }

  return (
    <div>
      {data.map(({ title, id, rating }) => (
        <div key={id} onClick={goToAnimeById}>
          {title} - {rating}
        </div>
      ))}
    </div>
  );
}

export default AnimeList;
