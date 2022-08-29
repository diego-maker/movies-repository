async function  getMovies (movieId){
  try {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=36b80437f241636fa8b1ff7035d3f55e&language=en-US`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("erro get movies ", error);
  }
};




module.exports = getMovies;