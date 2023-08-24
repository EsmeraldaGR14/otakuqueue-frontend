import React, { useState, useEffect } from "react";
import { getAllAnimeListAPI } from "../../utilities/API/AnimeListAPI";
import { useNavigate, useParams } from "react-router-dom";

// anime list GET ALL
function AnimeList() {
  const [data, setData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    (async function getAllAnimeList() {
      try {
        let { data } = await getAllAnimeListAPI();
        setData(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function goToAnimeById(id) {
    navigate(`/anime-list/${id}`);
  }

  return (
    <div>
      {data.map(({ title, id, rating }) => (
        <div key={id} onClick={() => goToAnimeById(id)}>
          {title} - {rating}
        </div>
      ))}
    </div>
  );
}

export default AnimeList;
