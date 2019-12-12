import React from 'react';

import './WatchlistDetails.css';
import watchlistService from '../services/watchlist-service';

const WatchlistDetails=()=>{
    const [watchlist, setWatchlist] = React.useState(null);
    const authorId = sessionStorage.getItem('userId');

    React.useEffect(()=>{
        watchlistService.load(authorId).then(watchlist => {
            setWatchlist(watchlist);
        });
    },[authorId]);

    return <div>
            {watchlist ?
                <div key={watchlist._id} className="MyWatchlist">
                    <h1>{watchlist[0].title}</h1>
                    <p>{watchlist[0].description}</p>
                    {watchlist[0].movies ? watchlist[0].movies.map((movie) =>
                        <div key={movie._id} className="MyMovie">
                            <a href={'/movie/' + movie._id}>
                                <h2 className="MovieTitle">{movie.title}</h2>
                                <img src={movie.image} alt="" />
                                <p>{movie.description}</p>
                                <button>watched</button>
                            </a>
                        </div>
                    ) : <p>You don't have any movies yet</p>}

                </div> : <div>Loading...</div>
            }
        </div>
}


export default WatchlistDetails;