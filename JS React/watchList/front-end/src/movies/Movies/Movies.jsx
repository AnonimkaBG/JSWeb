import React from 'react';

import './Movies.css';
import Movie from './Movie/Movie';
import Movieservice from '../../services/movie-service';

class Movies extends React.Component {
  state = {
    Movies: null
  };
  textInput = null;

  componentDidMount() {
    Movieservice.load(null).then(Movies => {
      this.setState({ Movies });
    });
  }

  inputChangeHandler = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { Movies } = this.state;

    return <div>
      {Movies ?
        <div className="Movies">
          {Movies.map((movie) =>
            <Movie key={movie._id} image={movie.image} imageAlt="image" title={movie.title} _id={movie._id}>{movie.description}</Movie>)}
        </div> : <div>Loading...</div>
      }
    </div>
  }
}


export default Movies;