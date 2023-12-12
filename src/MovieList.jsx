
import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

const MovieList = () => {
  return (
    <div>
      {Filter.map((movieCard, index) => (
        <MovieCard key={index} {...movieCard} />
      ))}
    </div>
  );
};

export default MovieList;