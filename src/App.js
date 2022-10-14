import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contents from "./components/Contents/Contents";
import Menu from "./components/Menu/Menu";
import { useSelector } from "react-redux";
import MoviesDetail from "./components/MovieDetail/MovieDetail";
import SearchMovies from "./components/SreachMovies/SearchMovies";
import Home from "./components/Pages/Home";

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Search from "./components/Pages/Search";

function App() {

  // const { MovieDetail } = useSelector((state) => state.infoMovie);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
      {/* <Intro />
      <Contents/>
      <Menu />
      <MoviesDetail movie={MovieDetail} showModal = {MovieDetail ? true : false}/> */}
      {/* <SearchMovies /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
