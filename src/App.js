import './App.css'
import categorys from './api/getMovies'
import Banner from './components/Banner';
import Nav from './components/Nav';
import Movies from './components/Movies';
import { useEffect, useState } from 'react';



function App() {
  
  const [category, setCategory]= useState([''])

  const paginations = async (page, title) =>{

    if(page === undefined ){
      return setCategory([ 
        {
          name: "Popular",
          title: "Populares",
          path: `movie/popular?api_key=36b80437f241636fa8b1ff7035d3f55e&language=en-US&page=1`,
          isLarge: true
        },
        {
          name: "Top_rated",
          title: "Mais votados",
          path: `movie/top_rated?api_key=36b80437f241636fa8b1ff7035d3f55e&language=en-US&page=1`,
          isLarge: true
        },
        {
          name: "UpComing",
          title: "Próximos lançamentos",
          path: `movie/upcoming?api_key=36b80437f241636fa8b1ff7035d3f55e&language=en-US&page=1`,
          isLarge: true
        },
        {
          name: "Trending",
          title: "Lançamentos",
          path: `trending/all/week?api_key=36b80437f241636fa8b1ff7035d3f55e&language=en-US&page=1`,
          isLarge: true
        },
        {
          name: "Popular",
          title: "Populares",
          path: `movie/popular?api_key=36b80437f241636fa8b1ff7035d3f55e&language=en-US&page=1`,
          isLarge: true
        },
      ] )
    }
    else{

      setCategory(categorys(page, title));
      
    }

  }
 
useEffect(()=>{
  paginations()
},[])
  return (
    <div className="App">
      
      <Nav />
      <Banner />
      {category.map((x)=>{
      return <Movies
      key={x.id}
      paginations={paginations}
       title={x.title}
       isLarge={x.isLarge}
       path={x.path} />;
      })}

    </div>
  );
}

export default App;
