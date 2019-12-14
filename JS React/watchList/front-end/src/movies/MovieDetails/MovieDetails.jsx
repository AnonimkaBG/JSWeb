import React from 'react';
import './MovieDetails.css';
import Movieservice from '../../services/movie-service';
import watchlistService from '../../services/watchlist-service';

const MovieDetails=(props)=>{
    const id = props.match.params.id;
    const [movie,setMovie]=React.useState(null);
    const _id=sessionStorage.getItem('userId');

    React.useEffect(()=>{
        Movieservice.loadOne(id).then(movie => {
            setMovie(movie );
        });
    },[id]);

    const addToList= ()=>{  
        watchlistService.load(_id).then((res)=>{
            if(res[0]._id){
                const found = res[0].movies.some(el => el.title===movie.title);
                if(found){
                    alert('You already have that movie in the watchlist!');
                }else{
                    watchlistService.updateWatchlist(movie,res[0]._id).then((res)=>alert(`Succesfully added ${movie.title} to your watchlist!`))
                }
            }else{
                alert('You dont have a watchlist!');
            }
        } );
        
    };

    return <div>
        <h1 className="MovieDetailsT">Movie details</h1>
            {movie ?
                <div className="MovieDetails">
                    <p className="MovieTitle">{movie.title}</p>
                    <img src={movie.image} alt="" />
                    <p className="description">{movie.description}</p>
                    {props.isLogged? <button className="button" onClick={addToList}>Add to watchlist</button> : ''}
                    
                </div> : <div className="NoInfo"><img className="Error" src="/404.png" alt="404"/></div>
            }
        </div>

}

export default MovieDetails;