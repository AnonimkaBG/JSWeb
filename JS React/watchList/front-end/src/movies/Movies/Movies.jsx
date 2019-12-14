import React from 'react';
import SearchBar from '@opuscapita/react-searchbar';

import './Movies.css';
import Movie from './Movie/Movie';
import Movieservice from '../../services/movie-service';

const Movies = () => {

  const [movies, setMovies] = React.useState(null);

  React.useEffect(() => {
    loadMovies();
  }, [])

  const loadMovies=()=>{
    Movieservice.load().then(movies => {
      setMovies(movies);
    });
  }

  const handleSearch = (searchValue) => {
    const newMovies = movies.filter(movie => {
      const searchTitle = searchValue.toLowerCase();
      const movieTitle = movie.title.toLowerCase();
      return movieTitle.includes(searchTitle);
    });
    setMovies(newMovies);
  }


  return <div>
     <SearchBar
          onSearch={handleSearch}
          className="SearchBar"
        />
        <button className="ClearButton" onClick={loadMovies}>clear filter</button>
    {movies ?
      <div className="Movies">
        {movies.map((movie) =>
          <Movie key={movie._id} image={movie.image} imageAlt="image" title={movie.title} _id={movie._id}>{movie.description}</Movie>)}
      </div> : <div>Loading...</div>
    }
  </div>
}

export default Movies;


