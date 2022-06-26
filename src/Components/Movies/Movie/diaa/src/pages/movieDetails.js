import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosInstance from "../network/axiosInstance";

  const  MovieDetails = ()=> {
    const [details, setDetails] = useState();
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const key = "1b33144be667ac939c59f9d57069f577";
        axiosInstance
        .get(`3/movie/${param.id}?api_key=${key}`)
        .then((res) => setDetails(res.data))
        .catch((error) => {
            console.log(error);
            console.log(param.id)
        });
        // console.log(details);
    },[]);

    
    return (
        <div className="">
            {details ? 
              <div className="card lg:card-side bg-base-100 shadow-xl m-10">
              <figure>
                  <img
                      src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                      className="object-contain w-60 m-10"
                      alt="Album"
                  />
              </figure>
              <div className="card-body p-32">
                  <h2 className="card-title">{details.title}</h2>
                  <p>{details.overview}</p>
                  <p>Popular : {details.popularity}</p>
                  <div className="card-actions justify-end">
                      <Link
                          to={"/"}
                          className="btn btn-primary"
                          onClick={() => {
                              navigate(-1);
                          }}
                      >
                          Back
                      </Link>
                  </div>
              </div>
          </div>
            
            
            : null}
          
        </div>
    );
}

export default MovieDetails