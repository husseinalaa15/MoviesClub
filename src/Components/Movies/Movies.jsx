import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axiosInstance from '../../network/axiosInstance';
import Pagenitation from '../Pageination/Pagenitation';
import './Movies.css'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addToFavs,AllMovies, countFavMovies } from '../../store/actions/addToFav';
import { FaHeart, FaHeartbeat, FaHeartBroken, FaRegHeart } from "react-icons/fa";
import { GetMovies, getMovies } from '../../store/actions/Movies';
import LangContext from '../../context/lang';


const Movies = () => {

    const allst = useSelector(st=>st);
    let favmoviesArr = useSelector((state)=>state.addFavs.favMovies);

    let dispatch = useDispatch();
    const [movies, setMovies] = useState();
    const [pages, setPages] = useState(1);
    const {  contextLang, setContextLang } =useContext(LangContext)   

    // console.log(contextLang)
    // let AllMoviesArr =useSelector((state)=>state.addFavs.allmovies);


    // const [Fav, setFav] = useState();
    // console.log(allst)

    const getMovies = useSelector((state)=>state.moviesList.list.results)
   useEffect(()=>{
    setMovies(getMovies)
    // console.log("start")
 
   },[])
  
    useEffect(() => {
        // console.log(getMovies)
        let params = {
            pages:pages,
            language:contextLang
        }
        setMovies(getMovies)

        dispatch(GetMovies(params))
        
        // let key="90557c5adabf517be978495233c71d9e"
        // // let url="https://api.themoviedb.org/3/movie/popular?api_key="
        // let moviesData = axiosInstance.get('/movie/popular?api_key='+key+'&page='+pages).then((data)=>setMovies(data.data.results)).catch((err)=>console.log(err))
    }, [contextLang,pages]);


    let nextPage = ()=>{
        setPages(pages+1)
    }
    let prevPage = ()=>{
        if(pages != 1 ){
            setPages(pages-1)

        }
    }


    // console.log(favArr)
    let addToFavourites = (movieId) =>{
        // console.log(movieId.id)
        let movieExist = favmoviesArr.find((m)=> m.id == movieId.id)
        if(!movieExist){
            
            favmoviesArr.push(movieId)
            dispatch(countFavMovies(favmoviesArr.length))
            dispatch(addToFavs(favmoviesArr))
            
        }else{
        
            let newFavmoviesArr= favmoviesArr.filter((m)=> m.id !== movieId.id) 
            dispatch(countFavMovies(newFavmoviesArr.length))
            dispatch(addToFavs(newFavmoviesArr))

        
        }
        // console.log(favmoviesArr)

    }

//    console.log(favmoviesArr)

  return (
   <div className='container' style={ contextLang == 'ar'? {direction:"rtl"} : {direction:"ltr"} }>
    <div className='row'>
        { getMovies? 
            getMovies.map((movie)=>{
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
                    <div key={movie.id} className='col-lg-3 mt-3'>
                        <div   className='card movieCard'>
                            <img src={src} />
                            <div className='movieCardDetails'>

                                    <h3>{movieTitle}</h3>
                                    <h6>{movie.release_date}</h6>
                                    <Link to={`/movies/${movie.id}`} key={movie.id} className='col-lg-3 mt-3'>
                                       <button className='btn btnDetails' >{contextLang == 'ar' ? "تفاصيل" : "Details"}</button>
                                    </Link>
                            <div className='movieData d-flex justify-content-between align-items-center p-3'>
                                    
                                    <h5 style={{backgroundColor:rateBG()}}>{movieRate} %</h5>
                                    <button  type='button' onClick={()=>addToFavourites(movie)}>
                                       
                                        {favmoviesArr.find((m)=> m.id == movie.id) ?
                                        <FaHeart fontSize={25}  color='#D61C4E'  /> :
                                        <FaRegHeart fontSize={25}  color='#D61C4E'  />}
                                    </button>
                            </div>

                                
                            </div>

                        </div>
                    </div>
                    
                )
            }) 
            :
            null
        }
          
          <Pagenitation next ={nextPage}  prev={prevPage}/>
    </div>
   </div>
  )
}
    // useEffect(()=>{

    //     // let key="90557c5adabf517be978495233c71d9e"

    //     // let moviesData = axiosInstance.get('/movie/popular?api_key='+key).then((data)=>setMovies(data.data.results)).catch((err)=>console.log(err))

    // },[pages])


    // useEffect(()=>{
    //     // console.log('moviesready')
    //     AllMoviesArr = movies
       
    //     // console.log(AllMoviesArr)
    //     console.log(AllMoviesArr)
    //     dispatch(AllMovies(AllMoviesArr))
    
    // },[movies,pages])
export default Movies