import React, { useState } from "react";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";
import { addNewAnimeByIdApi } from "../../utilities/API/AnimeListAPI";
import { useNavigate } from "react-router-dom";

function NewAnime() {
  const [newAnimeData, setNewAnimeData] = useState({
    title: "",
    description: "",
    genre: "",
    release_date: "",
    rating: "",
  });

  let navigate = useNavigate();

  async function handleNewAnime(e) {
    e.preventDefault();
    try {
      await addNewAnimeByIdApi(newAnimeData);
      console.log(newAnimeData);
      navigate("/anime-list");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Add New Anime</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleNewAnime}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={(e) =>
                      handleOnChange(
                        e.target.id,
                        e.target.value,
                        newAnimeData,
                        setNewAnimeData
                      )
                    }
                    value={newAnimeData.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={(e) =>
                      handleOnChange(
                        e.target.id,
                        e.target.value,
                        newAnimeData,
                        setNewAnimeData
                      )
                    }
                    value={newAnimeData.description}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="genre"
                    name="genre"
                    onChange={(e) =>
                      handleOnChange(
                        e.target.id,
                        e.target.value,
                        newAnimeData,
                        setNewAnimeData
                      )
                    }
                    value={newAnimeData.genre}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="release_date" className="form-label">
                    Date:
                  </label>
                  <input
                    required
                    type="date"
                    className="form-control"
                    id="release_date"
                    name="release_date"
                    onChange={(e) =>
                      handleOnChange(
                        e.target.id,
                        e.target.value,
                        newAnimeData,
                        setNewAnimeData
                      )
                    }
                    value={newAnimeData.release_date}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">
                    Rating:
                  </label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="rating"
                    name="rating"
                    onChange={(e) =>
                      handleOnChange(
                        e.target.id,
                        e.target.value,
                        newAnimeData,
                        setNewAnimeData
                      )
                    }
                    value={newAnimeData.rating}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAnime;
