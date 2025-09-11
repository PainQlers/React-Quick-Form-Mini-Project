import React from "react";

function MovieList({ movies, selectedOption, onChange, error }) {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <fieldset>
        <legend className="mb-1">เลือกหนังที่คุณชอบ</legend>
        {movies.map((movie, index) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              id={`movie-${index}`}
              name="fav_movie"
              value={movie.title}
              checked={selectedOption === movie.title}
              onChange={onChange}
            />
            <label htmlFor={`movie-${index}`}>{movie.title}</label>
          </div>
        ))}
      </fieldset>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default MovieList;
