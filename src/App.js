import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AnimeList from "./components/AnimeShows/AnimeList";
import AnimeById from "./components/AnimeShows/AnimeById";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import { UserProvider } from "./utilities/Context/UserContext";
import { WatchlistProvider } from "./utilities/Context/WatchlistContext";
import AddToWatchlist from "./components/Watchlist/AddToWatchlist";
import Watchlist from "./components/Watchlist/Watchlist";
import WatchlistShowById from "./components/Watchlist/WatchlistShowById";
import Logout from "./components/Logout/Logout";
import EditWatchlistShow from "./components/Watchlist/EditWatchlistShow";
import NewAnime from "./components/AnimeShows/NewAnime";
import EditAnime from "./components/AnimeShows/EditAnime";
console.log(process.env.NODE_ENV);

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <WatchlistProvider>
            <NavBar />

            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="/anime-list" element={<AnimeList />}></Route>
              <Route
                path="/anime-list/add-new-anime"
                element={<NewAnime />}
              ></Route>
              <Route
                path="/anime-list/:animeId"
                element={<AnimeById />}
              ></Route>
              <Route
                path="/anime-list/:animeId/edit"
                element={<EditAnime />}
              ></Route>
              <Route
                path="/anime-list/:animeId/add-to-watchlist"
                element={<AddToWatchlist />}
              ></Route>

              <Route path="/watchlist" element={<Watchlist />}></Route>
              <Route
                path="/watchlist/:animeId"
                element={<WatchlistShowById />}
              ></Route>
              <Route
                path="watchlist/:animeId/edit"
                element={<EditWatchlistShow />}
              ></Route>

              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/logout" element={<Logout />}></Route>

              <Route path="*" element=""></Route>
            </Routes>
          </WatchlistProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
