import { MdHome, MdTheaterComedy } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import {
  GiDistraction,
  GiFloatingGhost,
  GiLoveMystery,
  GiFilmSpool,
} from "react-icons/gi";
import {SiNetflix} from 'react-icons/si';
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menu(props) {
  return (
    <MenuPane>
        <MenuItem name='Netflix' Icon={SiNetflix} to='netflix'/>
        <MenuItem name='Trending' Icon={HiTrendingUp} to='trendingMovies'/>
        <MenuItem name='Top rated' Icon={AiFillStar} to='topRatedMovies'/>
        <MenuItem name='Actions movies' Icon={GiDistraction} to='actionMovies'/>
        <MenuItem name='Comedy movies' Icon={MdTheaterComedy} to='commedyMovies'/>
        <MenuItem name='Horror movies' Icon={GiFloatingGhost} to='horrorMovies'/>
        <MenuItem name='Romance movies' Icon={GiLoveMystery} to='romanceMovies'/>
        <MenuItem name='Documentaies' Icon={GiFilmSpool} to='documentaries'/>

    </MenuPane>
  );
}

export default Menu;

const MenuPane = styled.div`
    position: fixed;
    display:flex;
    flex-direction: column;
    left:0;
    top: 20%;
    background: rgba(0, 0, 0, 0.3);
    padding: 4px 0px;
    z-index: 1000;
    transform-origin: left center;
    transition: all 0.3s linear;
    width:  46px;
    overflow: hidden;

    &:hover {
        width: auto;
        background: rgba(0, 0, 0, 0.6);

    }


    .subMenu {
        display: flex;
        // flex-direction: column;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: rgb(255,255,255,0.6);
            &:hover {
                color: #FFF;
            }
        }
    }
`;
