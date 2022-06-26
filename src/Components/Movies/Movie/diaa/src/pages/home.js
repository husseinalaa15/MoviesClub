import React from "react";
import Card from "../components/cards/cards";
import Pagination from "../components/pagination/pagination";
import { useEffect, useState } from "react";
import axiosInstance from "../network/axiosInstance";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axiosInstance
            .get("3/movie/popular", {})
            .then((res) => setMovies(res.data.results))
            .catch((error) => console.log(error));
    }, []);
    // console.log(movies);
    return (
        <div>
            <div>
                <div className="container mx-auto px-5 py-5  grid grid-cols-3 gap-4">
                    {movies?.map((movie) => (
                        <div key={movie.id} className="my-10">
                            <Card item={movie} />
                        </div>
                    ))}
                </div>
            </div>
            <Pagination />
        </div>
    );
}
