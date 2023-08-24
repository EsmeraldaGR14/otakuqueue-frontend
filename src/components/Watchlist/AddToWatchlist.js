import React, { useState } from "react";
import { useUserContext } from "../../utilities/Context/UserContext";
import { addToWatchlistAPI } from "../../utilities/API/WatchlistAPI";
import { useNavigate, useParams } from "react-router-dom";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";

function AddToWatchlist() {
  const [data, setData] = useState({
    status: "",
    current_episode: 1,
    is_favorite: false,
  });

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

  return (
    <div>
      <form onSubmit={submitNewWatchlistData}>
        <div>
          <label>STATUS</label>
          <select
            required
            type="text"
            id="status"
            name="status"
            onChange={(e) =>
              handleOnChange(e.target.id, e.target.value, data, setData)
            }
          >
            <option value="" disabled>
              select an option
            </option>
            {statusOptions.map((option, index) => (
              <option key={index} value={option.replaceAll(" ", "_")}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>CURRENT EPISODE</label>
          <input
            required
            type="text"
            id="current_episode"
            name="current_episode"
            onChange={(e) =>
              handleOnChange(e.target.id, e.target.value, data, setData)
            }
            value={data.current_episode}
          ></input>
        </div>
        <div>
          <label>IS FAVORITE</label>
          <input
            type="checkbox"
            id="is_favorite"
            name="is_favorite"
            onChange={(e) =>
              handleOnChange(e.target.id, e.target.checked, data, setData)
            }
            checked={data.is_favorite}
          ></input>
        </div>

        <button>ADD</button>
      </form>
    </div>
  );
}

export default AddToWatchlist;
