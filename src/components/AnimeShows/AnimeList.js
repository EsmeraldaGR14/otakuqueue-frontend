import React, { useState, useEffect } from "react";
import { getAllAnimeListAPI } from "../../utilities/API/AnimeListAPI";
import { useNavigate, useParams } from "react-router-dom";

function AnimeList() {
  const [data, setData] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    async function getAllAnimeList() {
      try {
        let { data } = await getAllAnimeListAPI();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllAnimeList();
  }, []);

  function goToAnimeById(id) {
    navigate(`/anime-list/${id}`);
  }

  const toggleSortOrder = () => {
    setSortAscending((prevSortOrder) => !prevSortOrder);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <button className="btn btn-primary" onClick={toggleSortOrder}>
          {sortAscending
            ? "Sort by Rating (Descending)"
            : "Sort by Rating (Ascending)"}
        </button>
        {data
          .slice()
          .sort((a, b) => {
            if (sortAscending) {
              return a.rating - b.rating;
            } else {
              return b.rating - a.rating;
            }
          })
          .map(({ title, id, rating }) => (
            <div
              key={id}
              className="col-md-4 mb-4"
              onClick={() => goToAnimeById(id)}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">Rating: {rating}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AnimeList;
