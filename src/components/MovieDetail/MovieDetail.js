import React from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setMovieDetail } from "../../store/actions";
import moment from 'moment';


function MoviesDetail(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };

  return (
    <MovieDetailModal>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hiddenBackdrop"}`}
        onClick={handleCloseModal}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hiddenModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                })`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">
              {movie && (movie.title || movie.name)}
            </h1>
            <p className="statistical">
              <span className="rating">
                Rating: {movie && movie.vote_average * 10}%
              </span>
              <span className="popularity">
                Popularity: {movie && movie.popularity}
              </span>
            </p>
            <div className="releaseDate">
              Release date:{" "}
              {movie &&
                (moment(movie.release_date).format("DD/MM/YYYY") ||
                  moment(movie.firt_air_date).format("DD/MM/YYYY"))}
            </div>
            <div className="runtime">
              Runtime: {movie && (movie.runtime || movie.episode_run_time)}
            </div>
            <p className="overview">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </MovieDetailModal>
  );
}

export default MoviesDetail;

const fadeIn = keyframes`
    0%: {  background-color: rgba(0,0,0,0) }
    100%: {  background-color: rgba(0,0,0,0.6) }
`;

const MovieDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }

  .showBackdrop {
    display: block;
  }

  .hiddenBackdrop {
    display: none;
  }

  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 1010;
    height: 60%;
    width: 100%;
    margin: 0 auto;
    color: var(--color-white);
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s linear;

    @media only screen and (max-width: 992px) {
      height: 80%;
    }

    @media only screen and (max-width: 992px) {
      height: 70%;
    }

    .container {
      position: realative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);

      @media only screen and (max-width: 992px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.94) 50%,
          transparent
        );
        width: 100%;
      }

      @media only screen and (max-width: 768px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.88) 50%,
          transparent
        );
      }

      .movieInfo {
        width: 65%;
        height: 100%;
        padding-left: 24px;
        color: var(--color-white);
        font-size: 20px;
        padding-top: 30px;

        @media only screen and (max-width: 768px) {
          font-size: 16px;
          width: 80%;
        }

        .movieTitle {
          margin-top: 30px;
        }

        .statistical {
          margin-top: 20px;
          display: flex;

          .rating {
            color: var(--color-green);
          }

          .popularity {
            color: yellow;
            margin-left: 12px;
          }
        }
        .releaseDate,
        .runtime {
          margin-top: 12px;
        }

        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;

          @media only screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-in-out;
  }

  .hiddenModal {
    top: 0;
    opacity: 0;
    left: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
`;
