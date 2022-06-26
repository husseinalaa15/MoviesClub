import { combineReducers } from "redux";
import AddToFavsReducer from "./addToFav";
import MoviesReducer from "./MoviesReducers";


export default combineReducers({
    addFavs : AddToFavsReducer,
    moviesList : MoviesReducer
})