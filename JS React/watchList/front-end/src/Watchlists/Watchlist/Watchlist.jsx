import React from 'react';
import './Watchlist.css';



function Watchlist({_id,title,description,movies}) {
    return <div className="Watchlist">
    <li key={movies._id} className="list">
      <h1>{title}</h1>
      <p>{description}</p>
      {movies ? 
      <ul>
          {movies.map((movie)=>
            <a key={movie._id} href={'/movie/'+movie._id }>
            <img src={movie.image} alt={movie.title}/>
            </a>
            )}
      </ul> : <div>Loading...</div>
    }
    </li>
    </div>
  };

  export default Watchlist;