import React, {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../Contents/Contents";
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import Menu from "../Menu/Menu";
import MoviesDetail from "../MovieDetail/MovieDetail";

function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovie);
  const [isShowMovieDetaill, setIsShowMovieDetail] = useState(false);

  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);

  return (
    <div>
      <Intro />
      <Contents />
      <Menu />
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetaill} />
      <Footer />
    </div>
  );
}

export default Home;
