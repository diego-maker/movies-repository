import React, { useEffect, useState } from "react";
import getMovies from "../getApi";
import "./Movies.css";

import ModalMovie from "./ModalMovie";
import { Pagination } from "@mui/material";

export default function Movies(props) {
  const [open, setOpen] = React.useState(false);
  const [movies, setMovies] = useState([]);
  const [descriptionModal, setDescriptionModal] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [idModalMovie, setIdModalMovie] = useState("");
  const [page, setPage] = useState("")
  const base_imageUrl = "https://image.tmdb.org/t/p/original";


  function handleClik(e, movie) {
    e.preventDefault();
    setDescriptionModal(movie.overview);
    setTitleModal(movie.title);
    setIdModalMovie(movie.id)
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const pagination = (e, title) => {
    const data = e.nativeEvent.path[0].ariaLabel;
    props.paginations(data.substring(10), title)
  };
 
  const fetchGetMovies = async () => {
    const data = await getMovies(props.path);
    setMovies(data?.results);
  };

  useEffect(() => {
    fetchGetMovies();
  }, [props.path]);

  
  return (
    <>
      <ModalMovie
        idModalMovie={idModalMovie}
        close={handleClose}
        open={open}
        descriptionModal={descriptionModal}
        titleModal={titleModal}
      />

      <div className="row-name">
        <h1 className="row-header">{props.title}</h1>
      </div>

      <ul class="cards">
        {movies?.map((movie) => {
          return (
            <>
              <li key={movie.id}>
                <a onClick={(e) => handleClik(e, movie)} className="card">
                  <div className="head_title">
                    <h3 className="card__title_name">{movie.title}</h3>
                  </div>
                  <img
                    key={movie.id}
                    className="card__image"
                    src={`${base_imageUrl}${
                      props.isLarge ? movie.backdrop_path : movie.poster_path
                    }`}
                    alt={movie.title}
                  ></img>
                  <div className="card__overlay">
                    <div className="card__header">
                      <div className="card__header-text">
                        <span className="card__status">
                          {movie.release_date}
                        </span>
                      </div>
                    </div>
                    <p className="card__description">{movie.overview}</p>
                  </div>
                </a>
              </li>
            </>
          );
        })}
      </ul>
      <div className="row-name">
      <Pagination 
      onClick={E=> pagination(E, props.title)} 
      className="row-pagination" 
      count={500} 
      color="primary" />

      </div>
    </>
  );
}
