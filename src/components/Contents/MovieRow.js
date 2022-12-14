import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SmoothHorizontalScrolling } from "../utils";
import { useEffect, useRef, useState } from "react";
import { useViewport } from "../hooks";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../../store/actions";


function MovieRow(props) {
  const { movies, title, isNetflix, idSection } = props;
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
    console.log(movie);
  }

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft)
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0)
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -(movieRef.current.clientWidth * 2),
        sliderRef.current.scrollLeft
      );
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [isDrag, dragDown, dragMove]);

  const onDragStar = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
  };

  const onDgEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <MoviesRowContainer
      id={idSection}
      draggable="false"
      onDragStart={onDragStar}
      onDragEnd={onDragEnd}
      onDragEnter={onDgEnter}
    >
      <h1 className="heading">{title}</h1>
      <MoviesSlider
        ref={sliderRef}
        draggable="true"
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
              ${
                windowWidth > 1200
                  ? "360px"
                  : windowWidth > 992
                  ? "300px"
                  : windowWidth > 768
                  ? "360px"
                  : "200px"
              })`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  className="moviesItem"
                  key={index}
                  ref={movieRef}
                  draggable="false"
                  onClick={()=> dispatch(setMovieDetail(movie))}
                >
                  <div className="imgMovie" draggable="false">
                    <img src={imageUrl} alt="" />
                  </div>
                  <div className="movieName">{movie.name || movie.title}</div>
                </div>
              );
            }
          })}
      </MoviesSlider>
      <div
        className={`btnLeft ${isNetflix && "isNetflix"}`}
        onClick={handleScrollLeft}
      >
        <HiChevronLeft />
      </div>
      <div
        className={`btnRight ${isNetflix && "isNetflix"}`}
        onClick={handleScrollRight}
      >
        <HiChevronRight />
      </div>
    </MoviesRowContainer>
  );
}

export default MovieRow;

const MoviesRowContainer = styled.div`
  position: relative;
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 20px 20px 0;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 18px;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opactity: 0.8;
      font-size: 50px;
      transition: all 0.3s linear;
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opactity: 0.8;
      font-size: 50px;
      transition: all 0.3s linear;
    }
  }

  .isNetflix {
    width: max-content;
    height: 100px;
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overfow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding: 28px 0px;
  scroll-behavior: smooth;

  &:hover .moviesItem {
    opacity: 0.5;
  }

  .moviesItem {
    position: relative;
    transform: scale(1);
    max-width: 400px;
    width: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;

    &:hover {
      transform: scale(1.1);
      z-index: 10;
      opacity: 1;
    }

    img {
      width: 100%;
      object-fit: cover;
    }

    .movieName {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;
