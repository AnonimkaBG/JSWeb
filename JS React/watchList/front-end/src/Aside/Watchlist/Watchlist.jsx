import React from 'react';



function Watchlist({_id,title}) {
    return <div className="Watchlist">
    <li className="list">
      <a href={'/watchlist/'+_id}>{title}</a>
    </li>
    </div>
  };

  export default Watchlist;