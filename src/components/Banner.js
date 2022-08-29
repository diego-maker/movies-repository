import React, { useEffect, useState } from "react";
import getMovies from "../getApi";
import "./Banner.css";
import category from "../api";

export default function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchGetMovies = async () => {
    try {
      const bannerNetflix = category.find(
        (Categorys) => Categorys.name === "Top_rated"
      );

      const data = await getMovies(bannerNetflix.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovies(movies[randomIndex]);
    } catch (error) {
      console.log("erro ao pegar o movie banner", error);
    }
  };

  useEffect(() => {
    fetchGetMovies();
  }, []);


  function truncade(str, n){
    return str?.length > n ? str.substring(0, n - 1) + "..." : str; 
  }

  return (
    <>
      <header
        className="banner-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          roundPosition: "center-center",
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movies?.title || movies?.name || movies?.original_name}
          </h1>

          <div className="banner-button-container">
            <button className="banner-button">assistir</button>
            <button className="banner-button">minha lista</button>
          </div>

          <div className="banner-description">
            <h2>{truncade(movies?.overview , 150)}</h2>
          </div>
        </div>
      </header>
    </>
  );
}
