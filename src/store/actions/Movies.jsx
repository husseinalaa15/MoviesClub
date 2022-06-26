import axiosInstance from "../../network/axiosInstance"

export const GetMovies = (params) => (dispatch)  =>{
    
    return axiosInstance.get("/movie/popular?api_key=90557c5adabf517be978495233c71d9e",{params:{language:params.language,page:params.pages}})
    .then((res)=>dispatch({
        type:"GET_MOVIES",
        payload:res.data

    }
  
    )).catch((err)=>console.log(err));
}

export const GetMovie = (id,lang)=>(dispatch)=>{
    // axiosInstance.get(`/movie/${param.id}?api_key=${key}&language=${contextLang}`)
    // console.log('fromthunk : ' + id)
    return axiosInstance.get(`/movie/${id}?api_key=90557c5adabf517be978495233c71d9e&language=${lang}`)
    .then((res)=>{
        dispatch({
            type:"GET_MOVIE",
            payload:res.data
        })
    })
    .catch((err)=>console.log(err))
}

export const getSearched = (params)=>(dispatch)=>{

    // console.log(params.query)
    return axiosInstance.get(`/search/movie?api_key=90557c5adabf517be978495233c71d9e`,{params:{query:params.query,language:params.language}})
    .then((res)=>{
        dispatch({
            type:"GET_SEARCHED",
            payload:res.data
        })
    })
    .catch((err)=>console.log(err))
}

