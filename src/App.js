import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Movie from './Components/Movies/Movie/movie';
import SearchResults from './Components/Search/SearchResults';
import LangContext from './context/lang';
import { useState } from 'react';
function App() {
  
  const [contextLang, setContextLang] = useState('en');
  return (
    <div className="App">
      <BrowserRouter>
      <LangContext.Provider value={{contextLang, setContextLang}}>

        <Navbar />
          <Routes>
            <Route path='/MoviesClub' exact element={<Home /> }/>
            <Route path='MoviesClub' exact element={<Home /> }/>
            <Route path='movies/:id' exact element={<Movie /> }/>
            <Route path='movies/search/:search' exact element={<SearchResults /> }/>

            <Route path='favourites' element={<Favourites /> }/>

            {/* <Home /> */}
            


          </Routes>

          </LangContext.Provider>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
