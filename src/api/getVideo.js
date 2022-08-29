async function  getMovies (movieId){
  try {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=APIKEY&language=en-US`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("erro get movies ", error);
  }
};




module.exports = getMovies;