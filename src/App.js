import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AnimeList from "./components/AnimeShows/AnimeList";
console.log(process.env.NODE_ENV);
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/anime-list" element={<AnimeList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
