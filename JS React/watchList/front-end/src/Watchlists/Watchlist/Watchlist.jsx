import React from 'react';
import './Watchlist.css';



function Watchlist({_id,title,description,movies}) {
    return <div className="Watchlist">
    <li className="list">
      <h1>{title}</h1>
      <p>{description}</p>
      {movies ? 
      <ul>
          {movies.map((movie)=>
          <li>
            <a href={'/movie/'+movie._id}>
            <img src={movie[0].image} alt={movie[0].title}/>
            </a>
            </li>)}
      </ul> : <div>Loading...</div>
    }
    </li>
    </div>
  };

  export default Watchlist;