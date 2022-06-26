


export const addToFavs = (payload) =>{
    return{
        type:"Add_To_Favourites",
        payload
    }
}

export const AllMovies = (payload)=>{
    return{
        type:"ALL_MOVIES",
        payload
    }
}

export const countFavMovies = (payload)=>{
    return{
        type:"COUNT_FAV_MOVIES",
        payload
    }
}