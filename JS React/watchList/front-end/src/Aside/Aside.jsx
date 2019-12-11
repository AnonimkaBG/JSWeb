import React from 'react';
import watchlistService from '../services/watchlist-service';
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
          {Watchlists.map((watchlist) =>
            <a key={watchlist._id} href={'/watchlist/'+watchlist._id}>{watchlist.title}</a>)
            }
        </aside> : <div>Loading...</div>
      }
    </div>
  }
}


export default Aside;
