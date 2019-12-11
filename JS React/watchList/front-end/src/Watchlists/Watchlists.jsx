import React from 'react';

import './Watchlists.css';
import watchlistService from '../services/watchlist-service';
import Watchlist from './Watchlist/Watchlist';

class Watchlists extends React.Component {
    state = {
        Watchlists: null
    };
    textInput = null;

    componentDidMount() {
        watchlistService.load().then(Watchlists => {
            this.setState({ Watchlists });
        });
    }

    inputChangeHandler = (e) => {
        console.log(e.target.value);
    }

    render() {
        const { Watchlists } = this.state;

        return <div>
            {Watchlists ?
                <div className="Watchlists">
                    <ul>
                        {Watchlists.map((watchlist) =>watchlist.movies.length!==0? <Watchlist key={watchlist._id} image={watchlist.image} title={watchlist.title} description={watchlist.description} movies={watchlist.movies}></Watchlist> : '')}
                    </ul>
                </div> : <div>Loading...</div>
            }
        </div>
    }
}


export default Watchlists;