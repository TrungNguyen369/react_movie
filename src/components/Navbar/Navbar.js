import NetflixLogo from "../../assets/images/logo.png";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useScrollY } from "../hooks";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const scrollY = useScrollY();
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    if (keywords.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    } else {
      navigate(`/`);
    }
  };

  const goHome = () => {
    navigate(`/`);
    setKeywords('');
  }

  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="logo" onClick={goHome}>
          <img src={NetflixLogo} />
        </div>
        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Search for a movie, tv show, person......"
            onChange={handleChangeInput}
            value={keywords}
          />
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  transition-timing-fuction: ease-in;
  transition: all 1s;
  z-index: 1000;

  .navContainer {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 10px;
    justify-content: flex-start;
  }

  .logo {
    width: 120px;
    cursor: pointer;
    img {
      width: 100%;
    }
  }

  .navSearch {
    // color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover .iconSearch {
      opacity: 1;
    }

    .iconSearch {
      display: flex;
      cursor: pointer;
      font-size: 28px;
      color: var(--color-white);
      transform: translateX(28px);
      opacity: 0.8;
    }

    input {
      font-size: 14px;
      border: 1px solid #fff;
      color: var(--color-white);
      outline: none;
      width: 0px;
      height: 100%;
      cursor: pointer;
      opacity: 0;
      padding: 10px;
      background: var(--color-background);
      transition: 0.5s;

      &:focus {
        padding-left: 26px;
        width: 300px;
        cursor: text;
        border-radius: 4px;
        opacity: 1;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .navContainer {
      // background-color: var(--color-background);
    }
  }
  @media only screen and (max-width: 768px) {
    .navContainer {
      // flex-direction: column;
      padding: 12px 0px;
      // background-color: var(--color-background);
    }

    input {
      padding-left: 26px !important;
      width: 300px !important;
      cursor: text;
      border-radius: 4px;
      opacity: 1 !important;
    }
  }
`;
