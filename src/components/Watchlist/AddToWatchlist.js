import React, { useEffect, useState } from "react";
import { useUserContext } from "../../utilities/Context/UserContext";
import { addToWatchlistAPI } from "../../utilities/API/WatchlistAPI";
import { useNavigate, useParams } from "react-router-dom";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";
import { getAnimeByIdAPI } from "../../utilities/API/AnimeListAPI";

function AddToWatchlist() {
  const [data, setData] = useState({
    status: "",
    current_episode: 1,
    is_favorite: false,
  });

  const [animeData, setAnimeData] = useState({});
  console.log(animeData);

  const { animeId } = useParams();
  console.log(animeId);

  const { usersData } = useUserContext();
  console.log("this is context", usersData);

  const statusOptions = ["watching", "want to watch", "watched"];

  let navigate = useNavigate();

  async function submitNewWatchlistData(e) {
    e.preventDefault();
    try {
      console.log(data);
      await addToWatchlistAPI(usersData.id, animeId, data);
      navigate(`/anime-list`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async function getAnimeById() {
      try {
        let { data } = await getAnimeByIdAPI(animeId);
        setAnimeData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [animeId]);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Add to Watchlist: {animeData.title}</h2>
        </div>

        <div className="card-body">
          <form onSubmit={submitNewWatchlistData}>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                <strong>Status:</strong>
              </label>
              <select
                required
                className="form-control"
                id="status"
                name="status"
                onChange={(e) =>
                  handleOnChange(e.target.id, e.target.value, data, setData)
                }
              >
                <option value="" disabled>
                  Select an option
                </option>
                {statusOptions.map((option, index) => (
                  <option key={index} value={option.replaceAll(" ", "_")}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="current_episode" className="form-label">
                <strong>Current Episode:</strong>
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="current_episode"
                name="current_episode"
                onChange={(e) =>
                  handleOnChange(e.target.id, e.target.value, data, setData)
                }
                value={data.current_episode}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="is_favorite"
                name="is_favorite"
                onChange={(e) =>
                  handleOnChange(e.target.id, e.target.checked, data, setData)
                }
                checked={data.is_favorite}
              />
              <label className="form-check-label" htmlFor="is_favorite">
                <strong>Favorite:</strong>
              </label>
            </div>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddToWatchlist;
