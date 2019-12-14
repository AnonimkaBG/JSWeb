import React from 'react';


import './MyWatchlist.css';
import watchlistService from '../services/watchlist-service';

const Watchlist = () => {
    const [watchlist, setWatchlist] = React.useState(null);
    const authorId = sessionStorage.getItem('userId');

    React.useEffect(() => {
        watchlistService.load(authorId).then(watchlist => {
            if (watchlist.length !== 0) {
                setWatchlist(watchlist);
            }
        });
    }, [authorId]);

    const removeMovie = (props) => {               // TO DO delete watchlist and edit
        const id = props.target.id; // movie id to delete
        let oldList = watchlist[0].movies;
        const newList = oldList.filter((movie) => { return movie._id !== id });
        watchlistService.updateWatchlist(newList, watchlist[0]._id).then((watchlist) => setWatchlist([watchlist]));
    }

    const removeList=()=>{
        const id=watchlist[0]._id;  // list id to delete
        watchlistService.deleteWatchlist(id).then(res=>setWatchlist(null));
    }


    return <div>
        {watchlist ?
            <div key={watchlist[0]._id} className="MyWatchlist">
                <h1>{watchlist[0].title} Watchlist</h1>
                <p>{watchlist[0].description}</p>
                <button className="DeleteBtn" onClick={removeList}><i class="fa fa-trash"></i> Delete watchlist</button>
                {watchlist[0].movies.length!==0 ? watchlist[0].movies.map((movie) =>
                    <div key={movie._id} className="MyMovie">
                        <h2 className="MyMovieTitle">{movie.title}</h2>
                        <img src={movie.image} alt="" />
                        <p>{movie.description}</p>
                        <button id={movie._id}  onClick={removeMovie}>watched</button>
                    </div>
                ) : <div className="NoInfo">You don't have any movies yet</div>}

            </div> : <div className="NoInfo">You don't have watchlist yet</div>
        }
    </div>
}



export default Watchlist;