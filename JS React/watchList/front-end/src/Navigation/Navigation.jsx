import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';


function Navigation({ isLogged }) {
  const username=sessionStorage.getItem('username');
  const id=sessionStorage.getItem('userId');

  return <nav className="Navigation">
    <ul>
      <NavLink to="/">  <img id="logo" src="/logo.png" alt="my-app-logo" /></NavLink>
      {isLogged && <NavLink  className="listItem" to={'/user/'+id}> {username}</NavLink>}
      {isLogged && <NavLink className="listItem" to="/logout">Logout</NavLink>}
      {!isLogged && <NavLink className="listItem" to="/login">Login</NavLink>}
      {!isLogged && <NavLink className="listItem" to="/register">Register</NavLink>}
      {isLogged && <NavLink className="listItem" to="/create-movie">Create Movie</NavLink>}
      {isLogged && <NavLink className="listItem" to="/create-watchlist">Create Watchlist</NavLink>}
      {isLogged && <NavLink className="listItem" to="/myWatchlist">My Watchlist</NavLink>}
        <NavLink className="listItem" to="/watchlists">Watchlists</NavLink>
        <NavLink  className="listItem" to="/bored">Bored?</NavLink>
    </ul>
  </nav>;
};


export default Navigation;