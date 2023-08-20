import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AnimeList from "./components/AnimeShows/AnimeList";
import AnimeById from "./components/AnimeShows/AnimeById";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
console.log(process.env.NODE_ENV);
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:user-id/anime-list" element={<AnimeList />}></Route>
          <Route
            path="/:user-id/anime-list/:anime-id"
            element={<AnimeById />}
          ></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element=""></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
