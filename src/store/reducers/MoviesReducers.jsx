// import { act } from "react-dom/test-utils"

const INITIAL_STATE = {
    list : [],
    singlemovie:{},
    searched:[]
}

export default function MoviesReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'GET_MOVIES':
            return {
                ...state,
                list : action.payload
            }
        case 'GET_MOVIE':
            return{
                ...state,
                singlemovie:action.payload
            }
        case 'GET_SEARCHED':
            return{
                ...state,
                searched:action.payload
            }
        default :
        return state
    }
}