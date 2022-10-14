import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";
import React, { useState } from "react";

function Intro(props) {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <IntroContainer>
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/389619782"
        className="videoInfo"
      />
      <div className="infoIntro">
        <h1 className="headingIntro">Netflix - 6 Underground</h1>
        <p className="overviewIntro">
          Welcome. Millions of movies, TV shows and people to discover. Explore
          now.
        </p>
      </div>
      {isMuted ? (
        <VscMute
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <VscUnmute
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
      <div className="fadeBottom"></div>
    </IntroContainer>
  );
}

export default Intro;

const IntroContainer = styled.div`
  position: relative;
  background-color: var(--color-background);
  color: var(--color-white);
  padding-top: 48%;
  width:100%;

  @media only screen and (max-width: 992px) {
    padding-top: 70%;
  }


  .videoInfo {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;

    @media only screen and (max-width: 992px) {
      top: 120px;
      left: 25px;
    }

    @media only screen and (max-width: 768px) {
      top: 100px;
      left: 15px;
    }

    .headingIntro {
      font-size: 60px;
      transition: 0.3s ease;

      @media only screen and (max-width: 992px) {
        font-size: 40px;
      }

      @media only screen and (max-width: 768px) {
        font-size: 24px;
      }
    }

    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-hight: 1.4;
      padding-top: 24px;
      font-size: 18px;

      @media only screen and (max-width: 992px) {
        font-size: 16px;
      }

      @media only screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .btnVolume {
    position: absolute;
    font-size: 40px;
    right: 10%;
    top: 50%;
    padding: 6px;
    color: #bbb;
    border: #fff solid 1px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgb(211, 211, 211, 0.18);
    }

    @media only screen and (max-width: 992px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  .fadeBottom{
    position: absolute;
    bottom:0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15,15,15,0.6) 40%,
      rgb(17,17,17),
      rgb(17,17,17)
    )
  }
`;
