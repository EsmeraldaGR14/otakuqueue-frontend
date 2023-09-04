import React from "react";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";
import { useNavigate, useParams } from "react-router-dom";
import { useWatchlistContext } from "../../utilities/Context/WatchlistContext";
import { useUserContext } from "../../utilities/Context/UserContext";
import { editToWatchlistAPI } from "../../utilities/API/WatchlistAPI";

function EditWatchlistShow() {
  // const [data, setData] = useState({});

  const statusOptions = ["watching", "want to watch", "watched"];

  let { animeId } = useParams();
  let navigate = useNavigate();

  const { watchlistItem, setWatchlistItem } = useWatchlistContext();
  const { usersData } = useUserContext();

  async function submitEditedWatchlistData(e) {
    e.preventDefault();
    try {
      let editedWatchlistData = {
        user_id: usersData.id,
        anime_id: animeId,
        status: watchlistItem.status,
        current_episode: watchlistItem.current_episode,
        is_favorite: watchlistItem.is_favorite,
      };
      await editToWatchlistAPI(usersData.id, animeId, editedWatchlistData);
      navigate(`/watchlist/${animeId}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            Edit Watchlist Item: {watchlistItem.title}
          </h2>
        </div>

        <div className="card-body">
          <form onSubmit={submitEditedWatchlistData}>
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
                  handleOnChange(
                    e.target.id,
                    e.target.value,
                    watchlistItem,
                    setWatchlistItem
                  )
                }
                value={watchlistItem.status || ""}
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
                type="number"
                className="form-control"
                id="current_episode"
                name="current_episode"
                onChange={(e) =>
                  handleOnChange(
                    e.target.id,
                    e.target.value,
                    watchlistItem,
                    setWatchlistItem
                  )
                }
                value={watchlistItem.current_episode || ""}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="is_favorite"
                name="is_favorite"
                onChange={(e) =>
                  handleOnChange(
                    e.target.id,
                    e.target.checked,
                    watchlistItem,
                    setWatchlistItem
                  )
                }
                checked={watchlistItem.is_favorite || false}
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
                Submit
              </button>
              <button type="button" className="btn btn-danger">
                Remove
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditWatchlistShow;
