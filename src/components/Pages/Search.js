import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MoviesDetail from "../MovieDetail/MovieDetail";
import SearchMovies from "../SreachMovies/SearchMovies";

function Search(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovie);

  return (
    <div>
      <SearchMovies />
      <MoviesDetail
        movie={MovieDetail}
        showModal={MovieDetail ? true : false}
      />
    </div>
  );
}

export default Search;
