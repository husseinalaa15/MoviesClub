import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../network/axiosInstance';
import {useParams,Link } from 'react-router-dom';
import LangContext from '../../context/lang';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getSearched } from '../../store/actions/Movies';

const SearchResults = () => {
    let param = useParams();
    let dispatch = useDispatch();
    let searchArray  = useSelector((state)=>state.moviesList.searched.results)

    const {  contextLang, setContextLang } =useContext(LangContext)   
    const [moviesResults, setMoviesResults] = useState();

    // console.log("param"+param.search)
    let params = {
        query:param.search,
        language:contextLang
    }
      
    const [paramsstate, setparams] = useState();
    useEffect(()=>{
        dispatch(getSearched(params))  
            // setMoviesResults(searchArray)
            
        },[param])
        useEffect(() => {
    //     let key="90557c5adabf517be978495233c71d9e"
    //    axiosInstance.get('/search/movie?api_key='+key+'&query='+param.search+'&language='+contextLang).then((data)=>setMoviesResults(data.data.results)).catch((err)=>console.log(err))
          
                dispatch(getSearched(params))  

    }, [contextLang,moviesResults]);
    
    
//    console.log( "movie"+moviesResults)
  

  return (
   <div className='container'>
    <div className='row'>
       {
       searchArray? 
       searchArray.map((movie)=>{
        let src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        let movieTitle = movie.title;
        let movieRate = Math.round(movie.vote_average*100) /10;
        let rateBG = () =>{
            if(movieRate <50){
                return "#990000"
            }else if (movieRate > 50 && movieRate < 65){
                return "#F9D371"
            }else if (movieRate > 65 && movieRate < 80){
                return "#EC994B"
            }else if (movieRate > 80){
                return "#76BA99"
            }
        }
        return(
            <Link to={`/movies/${movie.id}`} key={movie.id} className='col-lg-3 mt-3'>
                <div className='card movieCard'>
                    <img src={src} />
                    <div className='movieCardDetails'>

                            <h3>{movieTitle}</h3>
                            <h6>{movie.release_date}</h6>

                    <div className='movieData d-flex justify-content-between align-items-center p-3'>
                            
                            <h5 style={{backgroundColor:rateBG()}}>{movieRate} %</h5>
                    </div>

                        
                    </div>

                </div>
            </Link>
                
            )
        }) 
       :null
       
       }
    
    </div>
   </div>
  )
}

export default SearchResults