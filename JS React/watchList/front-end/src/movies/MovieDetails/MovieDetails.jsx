import React from 'react';
import './MovieDetails.css';
import Movieservice from '../../services/movie-service';
import watchlistService from '../../services/watchlist-service';

class MovieDetails extends React.Component {
    state = {
        movie: null
    };

    addToList= ()=>{
        const _id=sessionStorage.getItem('userId');
        const {movie}=this.state;
        watchlistService.load(_id).then((res)=>{
            res[0]._id? watchlistService.updateWatchlist(movie,res[0]._id).then((res)=>console.log(res)) : alert('You dont have a watchlist!');
        } );
        
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