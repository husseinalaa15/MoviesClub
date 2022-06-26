import React,{useContext, useRef} from 'react'
import { useNavigate } from "react-router-dom";
import LangContext from '../../context/lang';
import './search.css'
const Search = (props) => {
    // console.log(props)
    const {  contextLang, setContextLang } =useContext(LangContext)   
    
    let input = useRef(null)
    let navigate = useNavigate();
    let onSearch=(e)=>{
        e.preventDefault();
        // console.log(input.current.value)
        navigate(`/movies/search/${input.current.value}`)
    }
  return (
    <form className="d-flex">
        <input className="form-control inputSearch me-2" type="search" placeholder={contextLang == 'ar' ? "بحث" : "Search"} aria-label="Search" ref={input}/>
        <button className="btn searchBtn" type="submit" onClick={onSearch}  >{contextLang == 'ar' ? "بحث" : "Search"}</button>
    </form>
  )
}

export default Search