import React from 'react';

import './MyWatchlist.css';
import watchlistService from '../services/watchlist-service';

class Watchlists extends React.Component {
    state = {
        Watchlist: null
    };

    componentDidMount() {
        const authorId = sessionStorage.getItem('userId');
        watchlistService.load(authorId).then(Watchlist => {
            this.setState({ Watchlist });
        });
    }

    inputChangeHandler = (e) => {
        console.log(e.target.value);
    }

    render() {
        const { Watchlist } = this.state;
        console.log(Watchlist);

        return <div>
            {Watchlist ?
                <div key={Watchlist._id} className="MyWatchlist">
                    <h1>{Watchlist[0].title}</h1>
                    <p>{Watchlist[0].description}</p>
                    {Watchlist[0].movies ? Watchlist[0].movies.map((movie) =>
                        <div key={movie._id} className="MyMovie">
                            <a href={'/movie/' + movie._id}>
                                <h2 className="MovieTitle">{movie.title}</h2>
                                <p>{movie.description}</p>
                                <img src={movie.image} alt="" />
                            </a>
                        </div>
                    ) : <p>You don't have any movies yet</p>}

                </div> : <div>Loading...</div>
            }
        </div>
    }
}


export default Watchlists;