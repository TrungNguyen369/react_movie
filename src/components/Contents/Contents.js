import React, { useEffect } from "react";
import MovieRow from "./MovieRow";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as ACTONS from "../../store/actions";
import {FaRegArrowAltCircleUp} from 'react-icons/fa';
import styled from "styled-components";
import { animateScroll as scroll} from 'react-scroll';
import { useScrollY } from "../hooks";

const ScrollToTop = () => {
    scroll.scrollToTop();
}

function Contents(props){
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();
    const  { 
        NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries
    } = useSelector(state => state.infoMovie)

    useEffect(()=> {
        dispatch(ACTONS.getNetflixOriginals());
        dispatch(ACTONS.getTrendingMovies());
        dispatch(ACTONS.getActionMovies());
        dispatch(ACTONS.getTopRatedMovies());   
        dispatch(ACTONS.getComedyMovies());
        dispatch(ACTONS.getHorrorMovies());
        dispatch(ACTONS.getRomanceMovies());
        dispatch(ACTONS.getDocumentaries());
       
    },[dispatch])


    return(
        <div >
            <MovieRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true} idSection='netflix'/>
            <MovieRow movies={TrendingMovies} title="Trending Movies" idSection='trendingMovies'/>
            <MovieRow movies={TopRatedMovies} title="Top rated Movies" idSection='topRatedMovies'/>
            <MovieRow movies={ActionMovies} title="Action Movies" idSection='actionMovies'/>
            <MovieRow movies={ComedyMovies} title="Comedy Movies" idSection='commedyMovies'/>
            <MovieRow movies={HorrorMovies} title="Horror Movies" idSection='horrorMovies'/>
            <MovieRow movies={RomanceMovies} title="Romance Movies" idSection='romanceMovies'/>
            <MovieRow movies={Documentaries} title="Documentaies Movies" idSection='documentaries'/>
            <GoToTop 
                onClick={()=> ScrollToTop()}
                style={{visibility: `${scrollY > 600 ? 'visible': 'hidden'}`}}
            >
                <FaRegArrowAltCircleUp/>
            </GoToTop>
        </div>
    )
}

export default Contents;

const GoToTop = styled.div`
    position: fixed;
    z-index:100;
    bottom: 50px;
    right: 70px;
    font-size: 50px;
    color: rgba(255,255,255,0.3);
    transition: all 0.3s linear;

    &:hover {
    color: rgba(255,255,255,0.8);
    }
`;