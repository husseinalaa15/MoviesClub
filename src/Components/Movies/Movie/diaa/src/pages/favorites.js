import React from "react";
import { useNavigate } from "react-router-dom";

export default function Favorites(props) {
    // console.log(props);
    const navigate = useNavigate();
    // console.log(navigate);

    return (
        <div>
            Favorites
            <button className="btn btn-primary" onClick={() => navigate("/")}>
                go to about page
            </button>
        </div>
    );
}
