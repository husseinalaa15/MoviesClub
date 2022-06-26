import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
    console.log(item);
    return (
        <div className="card w-72 h-full bg-base-100 shadow-xl ">
            <figure>
                <img
                    className=""
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className=" text-start">{item.overview}</p>
                <div className="card-actions justify-end">
                    <Link
                        to={`/movieDetails/${item.id}`}
                        className="btn btn-outline "
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
