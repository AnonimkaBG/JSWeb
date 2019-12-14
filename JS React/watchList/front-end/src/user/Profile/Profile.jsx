import React from 'react';

import './Profile.css';
import movieService from '../../services/movie-service';

const Profile = () => {
    const [createdMovies, setCreated] = React.useState(null);
    const username = sessionStorage.getItem('username');

    React.useEffect(() => {
        const id = sessionStorage.getItem('userId');
        movieService.load(id).then(createdMovies => {
            console.log(createdMovies)
            setCreated(createdMovies);
        });
    }, []);

    return <div>
        <h1>Username: {username}</h1>
        <h2>Created Movies</h2>
        {createdMovies ?
            <div className="createdMovies">
                {createdMovies.map((movie) =>
                    <div key={movie._id} className="MyMovie">
                        <h2 className="MyMovieTitle">{movie.title}</h2>
                        <img src={movie.image} alt="" />
                        <p>{movie.description}</p>
                </div>)}
            </div> : <div className="NoInfo">You don't have any created movies yet.</div>
        }
    </div>
}


export default Profile;