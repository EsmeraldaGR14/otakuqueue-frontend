/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { handleOnChange } from "../../utilities/helpers/onChangeHandler";
import {
  editAnimeByIdAPI,
  getAnimeByIdAPI,
} from "../../utilities/API/AnimeListAPI";
import { useParams, useNavigate } from "react-router-dom";
import { formatDate } from "../../utilities/helpers/formatDateHandler";

function EditAnime() {
  let { animeId } = useParams();
  let navigate = useNavigate();
  console.log(animeId);
  const [editedAnimeData, setEditedAnimeData] = useState({
    title: "",
    description: "",
    genre: "",
    release_date: "",
    rating: "",
  });

  useEffect(() => {
    (async function getAnimeById() {
      try {
        let { data } = await getAnimeByIdAPI(animeId);
        setEditedAnimeData(data[0]);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await editAnimeByIdAPI(animeId, editedAnimeData);
      console.log(editedAnimeData);
      console.log("Anime successfully updated");
      navigate(`/anime-list/${animeId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Edit Anime</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleEditSubmit}>
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
                        editedAnimeData,
                        setEditedAnimeData
                      )
                    }
                    value={editedAnimeData.title}
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
                        editedAnimeData,
                        setEditedAnimeData
                      )
                    }
                    value={editedAnimeData.description}
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
                        editedAnimeData,
                        setEditedAnimeData
                      )
                    }
                    value={editedAnimeData.genre}
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
                        formatDate(editedAnimeData),
                        setEditedAnimeData
                      )
                    }
                    value={editedAnimeData.release_date}
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
                        editedAnimeData,
                        setEditedAnimeData
                      )
                    }
                    value={editedAnimeData.rating}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAnime;
