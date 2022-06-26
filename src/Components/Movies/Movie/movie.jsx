import React, { useContext, useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../../network/axiosInstance';
import './movie.css'
import LangContext from '../../../context/lang';
import { GetMovie } from '../../../store/actions/Movies';
import { useDispatch ,useSelector} from 'react-redux/es/exports';

const Movie = () => {
    const [movie, setMovie] = useState();
    let param = useParams();
    // console.log(param)
    let dispatch = useDispatch();
    const singleMovie = useSelector((state)=>state.moviesList.singlemovie);
    const allst = useSelector(st=>st);
    const [singlemovie, setsinglemovie] = useState();
    const {  contextLang, setContextLang } =useContext(LangContext)   

    
    useEffect(() => {
        let key="90557c5adabf517be978495233c71d9e";
        // let url=`https://api.themoviedb.org/3/movie/${param.id}?api_key=${key}`
        // console.log(contextLang)
        // setsinglemovie(singleMovie)
        dispatch(GetMovie(param.id, contextLang))
        // console.log(singleMovie)

        // axiosInstance.get(`/movie/${param.id}?api_key=${key}&language=${contextLang}`).then((data)=>setMovie(data.data)).catch((err)=>console.log(err));
      }, [contextLang]);


      // console.log(movie)
    let movieRate = '' 
    let rateBG = () =>{
      return null
    }
    
    if(singleMovie != undefined ){
      movieRate = Math.round(singleMovie.vote_average*100) /10;
       rateBG = () =>{
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
    }

  return (
    
    <div className='container mt-5 pt-5'>
        { singleMovie != undefined ? 
            
          <div className='row justify-content-center align-items-center'>

            <div className='col-lg-6'>
              <div className='card singleMovieCard bg-transparent'>
                  <img src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`} />
              </div>
            </div>
            <div className='col-lg-6  text-white '>
            <div className='card singleMovieDetails mb-5 text-white p-5'>
                  <h1>{singleMovie.title}</h1>
                  <p className='releaseDate'>{singleMovie.release_date}</p>
                  <hr/>
                  <p>{singleMovie.overview}</p>
                  <div className='movieAllData d-flex flex-column justify-content-between'>
                      <h3 className='movierate' style={{backgroundColor:rateBG()}}>{movieRate} %</h3>
                      <h3 className='voteCount'> Vote Count : {singleMovie.vote_count} </h3>

                  </div>
                  <hr/>
                 <div className='companies justify-content-evenly align-items-center text-center d-flex text-white'>
                    {
                      singleMovie.production_companies != undefined ?
                    singleMovie.production_companies.map((p)=>{
                     return(
                      p.logo_path?
                       <img key={p.id} src={`https://image.tmdb.org/t/p/w500/${p.logo_path}`} />
                       :
                       null
                     )
                      
                    }
                    ):
                    null
                    }
                </div>
                  
              </div>
            </div>
          </div>
            :null
        }

      
    </div>
   
  )
}

export default Movie