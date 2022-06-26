
const INITIAL_STATE ={
    favMovies : [],
    allmovies : [],
    count:0
}
function AddToFavsReducer(state= INITIAL_STATE , action){
    switch (action.type) {
        case "Add_To_Favourites":
            return {
                ...state,
                favMovies:action.payload,
            }
        case "ALL_MOVIES":
            return{
                ...state,
                allmovies:action.payload
            }
        case "COUNT_FAV_MOVIES":
            return{
                ...state,
                count:action.payload
            }
        default :
            return state
    }
}


export default AddToFavsReducer