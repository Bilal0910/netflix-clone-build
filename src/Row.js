import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css'

function Row({title, fetchURL, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])


  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row_posters">
        {movies.map(
            (movie) => 
             ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
                <div>
            <img
             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
             key={movie.id}
             src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
             alt={movie.name}
              />
              <p className='movie_name'>
                {movie?.title || movie?.name || movie?.original_name}</p>
            
              </div>
        )
        )}
        </div>
      
    </div>
  );
        }

export default Row
