import axious from "axios";
import * as Types from "../type";

const API_KEY = "2f25d47577859f79f4a207264fbec20b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Netfilx Api error: ", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Trending Api error: ", error);
  }
};

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: Types.GET_TOP_RATED_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get top_rated Api error: ", error);
  }
};

export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get ACtion Api error: ", error);
  }
};

export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("GET COMEDY MOVIES Api error: ", error);
  }
};

export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("GET HORROR MOVIES Api error: ", error);
  }
};

export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("GET ROMANCE MOVIES Api error: ", error);
  }
};

export const getDocumentaries = () => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispatch({
      type: Types.GET_DOCUMENTARIES_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("GET DOCUMENTARIES MOVIES Api error: ", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  try {
    dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
    console.log("GET MOVIES DETAIL : detail");
  } catch (error) {
    console.log("GET MOVIES DETAIL error: ", error);
  }
};

export const getSearchMovies = (keyword) => async (dispatch) => {
  try {
    const result = await axious.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`
    );
    dispatch({
      type: Types.GET_SEARCH_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("GET SEARCH MOVIE error: ", error);
  }
};
