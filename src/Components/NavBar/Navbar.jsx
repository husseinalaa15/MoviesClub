import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import Search from '../Search/Search';
import {  useSelector } from 'react-redux/es/exports';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeart } from "react-icons/fa";
import langContext from '../../context/lang';
import {FaGlobe} from 'react-icons/fa'

const Navbar = () => {
    let count = useSelector((state)=>state.addFavs.count);
    // console.log(favCount.length)
    const {  contextLang, setContextLang } =useContext(langContext)   
    // console.log(contextLang)
    let langChange = ( )=>{
        setContextLang(contextLang  === 'en' ? 'ar' : 'en')
    }
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#3b2d20"}}>
        <div className="container-fluid" style={ contextLang == 'ar'? {direction:"rtl"} : {direction:"ltr"} }>
            <Link  className="navbar-brand" to="/MoviesClub">MoviesClub</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav justify-content-center align-items-center">

                <li className="nav-item">
                    <Link  className="nav-link active" to="/MoviesClub">{contextLang == 'ar' ? "أفلام" : "Movies"}</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link active" to="/favourites">{contextLang == 'ar' ? "المفضلة" : "Favourites"}</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link active" to="/favourites">
                        <FaHeart fontSize={20} color='#D61C4E'  />
                    <span className=' ms-1 me-1' style={{color:"#D61C4E"}}>{count}</span>
                    </Link> 
                </li>
                <li className="nav-item">
                   <button className='btn text-white' onClick={langChange}>
                    <FaGlobe className='me-1 ms-1'/>
                    {contextLang}
                    </button> 
                </li>
              
            </ul>
            <Search />
            </div>
        </div>
    </nav>
  )
}

export default Navbar