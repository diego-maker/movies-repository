var category = [
  {
    name: "Popular",
    title: "Populares",
    path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
    isLarge: true
  },
  {
    name: "Top_rated",
    title: "Mais votados",
    path: `movie/top_rated?api_key=APIKEY&language=en-US&page=1`,
    isLarge: true
  },
  {
    name: "UpComing",
    title: "Próximos lançamentos",
    path: `movie/upcoming?api_key=APIKEY&language=en-US&page=1`,
    isLarge: true
  },
  {
    name: "Trending",
    title: "Lançamentos",
    path: `trending/all/week?api_key=APIKEY&language=en-US&page=1`,
    isLarge: true
  },
  {
    name: "Popular",
    title: "Populares",
    path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
    isLarge: true
  },
]


export default function getApi(pages, title){
  if(pages === undefined || pages ===null || pages === "" || pages === NaN){
    return category = [
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Top_rated",
        title: "Mais votados",
        path: `movie/top_rated?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "UpComing",
        title: "Próximos lançamentos",
        path: `movie/upcoming?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Trending",
        title: "Lançamentos",
        path: `trending/all/week?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
    ]    
  }
  
  if(title === "Populares"){
    return category = [
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=${pages}`,
        isLarge: true
      },
      {
        name: "Top_rated",
        title: "Mais votados",
        path: `movie/top_rated?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "UpComing",
        title: "Próximos lançamentos",
        path: `movie/upcoming?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Trending",
        title: "Lançamentos",
        path: `trending/all/week?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
    ]
    
  } 
  else if(title === "Mais votados"){
    return category = [
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Top_rated",
        title: "Mais votados",
        path: `movie/top_rated?api_key=APIKEY&language=en-US&page=${pages}`,
        isLarge: true
      },
      {
        name: "UpComing",
        title: "Próximos lançamentos",
        path: `movie/upcoming?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Trending",
        title: "Lançamentos",
        path: `trending/all/week?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
    ]
  }


  else if(title === "Próximos lançamentos"){
    return category = [
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Top_rated",
        title: "Mais votados",
        path: `movie/top_rated?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "UpComing",
        title: "Próximos lançamentos",
        path: `movie/upcoming?api_key=APIKEY&language=en-US&page=${pages}`,
        isLarge: true
      },
      {
        name: "Trending",
        title: "Lançamentos",
        path: `trending/all/week?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
    ]
  }
  
  else if(title === "Lançamentos"){
    return category = [
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Top_rated",
        title: "Mais votados",
        path: `movie/top_rated?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "UpComing",
        title: "Próximos lançamentos",
        path: `movie/upcoming?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Trending",
        title: "Lançamentos",
        path: `trending/all/week?api_key=APIKEY&language=en-US&page=${pages}`,
        isLarge: true
      },
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
    ]
  }

  else if(title === "Populares"){
    return category = [
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Top_rated",
        title: "Mais votados",
        path: `movie/top_rated?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "UpComing",
        title: "Próximos lançamentos",
        path: `movie/upcoming?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Trending",
        title: "Lançamentos",
        path: `trending/all/week?api_key=APIKEY&language=en-US&page=1`,
        isLarge: true
      },
      {
        name: "Popular",
        title: "Populares",
        path: `movie/popular?api_key=APIKEY&language=en-US&page=${pages}`,
        isLarge: true
      },
    ]
  }
  
  return category
}