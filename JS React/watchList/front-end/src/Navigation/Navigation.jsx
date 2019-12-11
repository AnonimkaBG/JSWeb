import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation({ isLogged }) {
  const username=sessionStorage.getItem('username');
  return <nav className="Navigation">
    <ul>
      <li>
        <Link to="/">
          <img id="logo" src="/logo.png" alt="my-app-logo" />
        </Link>
      </li>
      {isLogged && <li className="listItem">
        <Link to='/{username}'> {username}</Link>
      </li>}
      {isLogged && <li className="listItem">
        <Link to="/logout">Logout</Link>
      </li>}
      {!isLogged && <li className="listItem">
        <Link to="/login">Login</Link>
      </li>}
      {!isLogged && <li className="listItem">
        <Link to="/register">Register</Link>
      </li>}
      {isLogged && <li className="listItem">
        <Link to="/create-movie">Create Movie</Link>
      </li>}
      {isLogged && <li className="listItem">
        <Link to="/create-watchlist">Create Watchlist</Link>
      </li>}
      {isLogged && <li className="listItem">
        <Link to="/myWatchlist">My Watchlist</Link>
      </li>}
      <li className="listItem">
        <Link to="/watchlists">Watchlists</Link>
      </li>
    </ul>
  </nav>;
};


export default Navigation;