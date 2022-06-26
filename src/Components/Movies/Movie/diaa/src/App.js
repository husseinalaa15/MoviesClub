import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/movieDetails";
import Favorites from "./pages/favorites";
import NotFound from "./pages/notFound";

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/movieDetails/:id"
                        element={<MovieDetails />}
                    />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
