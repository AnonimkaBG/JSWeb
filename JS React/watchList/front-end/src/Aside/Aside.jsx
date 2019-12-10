import React from 'react';
import watchlistService from '../services/watchlist-service';
import Watchlist from './Watchlist/Watchlist';
import './Aside.css';



class Aside extends React.Component {
  state = {
    Watchlists: null
  };
  textInput = null;

  componentDidMount() {
    watchlistService.load(null).then(Watchlists => {
      this.setState({ Watchlists });
    });
  }

  inputChangeHandler = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { Watchlists } = this.state;

    return <div className="Aside">
      {Watchlists ?
        <aside>
          <ul>
          {Watchlists.map((watchlist) =>
            <Watchlist key={watchlist._id} title={watchlist.title} _id={watchlist._id} ></Watchlist>)}
            </ul>
        </aside> : <div>Loading...</div>
      }
    </div>
  }
}


export default Aside;
