import React from 'react';
import './MovieDetails.css';
import Movieservice from '../../services/movie-service';
import watchlistService from '../../services/watchlist-service';

class MovieDetails extends React.Component {
    state = {
        movie: null
    };

    addToList= ()=>{
        const id = this.props.match.params.id;
        console.log(this.props)
        // watchlistService.updateWatchlist(movie,id).then((res)=>res.json());
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        Movieservice.loadOne(id).then(movie => {
            this.setState({ movie });
        });
    }

    render() {
        const { movie } = this.state;

        return <div>
            {movie ?
                <div className="MovieDetails">
                    <p className="MovieTitle">{movie.title}</p>
                    <img src={movie.image} alt="" />
                    <p className="description">{movie.description}</p>
                    <button onClick={this.addToList}>Add to watchlist</button>
                </div> : <div>Loading...</div>
            }
        </div>
    }
}

export default MovieDetails;