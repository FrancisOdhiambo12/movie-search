import React, { useState } from "react";

export default function MovieSearch(){

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const movieSearch = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=00372f95c2c4618d9bca186666aa616e&language=en-US&query=${query}&page=1&include_adult=false`

    try{
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data);
  } catch(err){
    console.error(err);
  }
}

  return(
    <>
      <form className="form" onSubmit={movieSearch}>
        <label className="label" htmlFor="query">Movie title</label>
        <input className="input"
          type="text" name="query"
          placeholder="i.e London has fallen"
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <div className="movie-card" key={movie.id}>
            <img className="card--image"
             src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
             alt={movie.title + ' poster'}/>
         <div className="card--content">
            <h3 className="movie--title">{movie.title}</h3>
            <p><small>RATING: {movie.vote_average}</small></p>
            <p><small>DATE OF RELEASE: {movie.release_date}</small></p>
            <p className="card--desc">{movie.overview}</p>
         </div>
          </div>
        ))}
      </div>

    </>

  )
}
