import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import LangContext from '../context/lang';
import { addToFavs, countFavMovies } from '../store/actions/addToFav'
const Favourites = () => {

  const allst = useSelector(st=>st);

  let favMovieSelector = useSelector((state)=>state.addFavs.favMovies)
  let moviesArr = useSelector((state)=>state.addFavs.allmovies);
  const [myFav, setmyFav] = useState();

  useEffect(() => {
    // favMovieSelector.map((movie)=>{
    //   // let favmov = moviesArr.find((m) => m.id == movie)
    //   console.log(movie)
    // })
     let results = moviesArr.filter(item=>favMovieSelector.includes(item.id))
     setmyFav(favMovieSelector);
    //  console.log(results)
    //  console.log('heere')
  }, []);
  
  // console.log(myFav )
  let dispatch = useDispatch();
  // console.log(moviesArr)
 
  // let getFavMovies = () =>{ 
   
  // }

  let removeFromfavs = (movieid) =>{
    // let removeMovie = myFav.filter((m) => m!== movieid);
    // console.log(removeMovie)
    // setmyFav(removeMovie);
    // console.log(movieid)
    let remove= favMovieSelector.filter((m)=> m.id != movieid)
    dispatch(countFavMovies(remove.length))
    dispatch(addToFavs(remove))

    let results = myFav.filter((item)=> item.id != movieid)
    setmyFav(results)
    // console.log(results)
  }
  // console.log(myFav)
  // console.log(myFav)
  return (
    <div className='container'>
      <div className='row text-white'>
        {myFav ? 
          myFav.map((fav)=>{
            let src = `https://image.tmdb.org/t/p/w500/${fav.poster_path}`;
            let movieTitle = fav.title;
            let movieRate = Math.round(fav.vote_average*100) /10;
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
              <div key={fav.id} className='col-lg-3 mt-3'>
              <div   className='card movieCard'>
                  <img src={src} />
                  <div className='movieCardDetails'>
  
                          <h3>{movieTitle}</h3>
                          <h6>{fav.release_date}</h6>
  
                  <div className='movieData d-flex justify-content-between align-items-center p-3'>
                          
                          <h5 style={{backgroundColor:rateBG()}}>{movieRate} %</h5>
                          <button type='button' onClick={()=>removeFromfavs(fav.id)}>
                            <FaHeart fontSize={25} color='#D61C4E'  />
              
                                    
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
        {/* {
         favMovieSelector.map((movie)=>{
          let favmov = moviesArr.find((m) => m.id == movie)
          // console.log(favmov)
          let src = `https://image.tmdb.org/t/p/w500/${favmov.poster_path}`;
          let movieTitle = favmov.title;
          let movieRate = Math.round(favmov.vote_average*100) /10;
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
          return (
          <div key={favmov.id} className='col-lg-3 mt-3'>
            <div   className='card movieCard'>
                <img src={src} />
                <div className='movieCardDetails'>

                        <h3>{movieTitle}</h3>
                        <h6>{favmov.release_date}</h6>

                <div className='movieData d-flex justify-content-between align-items-center p-3'>
                        
                        <h5 style={{backgroundColor:rateBG()}}>{movieRate} %</h5>
                        <button type='button' onClick={()=>removeFromfavs(favmov.id)}>
                          <FaHeart fontSize={25} color='#D61C4E'  />
            
                                  
                        </button>
                </div>

                    
                </div>

            </div>
          </div>
          )
        })
        
        
        } */}


      </div>
    
    </div>
  )
}

export default Favourites