async function  getMovies (path){
  try {
    let url = `https://api.themoviedb.org/3/${path}`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("erro get movies ", error);
  }
};




module.exports = getMovies;