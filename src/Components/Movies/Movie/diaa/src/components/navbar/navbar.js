import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <div className="navbar  text-white bg-black dark:bg-slate-800 rounded-lg px-6 py-2 ring-1 ring-slate-900/5 shadow-xl">
                <div className="navbar-start text-white-900 dark:text-white  text-base font-medium tracking-tight">
                    <div className="btn btn-ghost hover:bg-sky-700 normal-case text-3xl font-bold">
                        <span>Diaa</span>
                        <span className="text-3xl font-bold">MDB</span>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">
                        <li>
                            <Link to="/" className="hover:bg-sky-700">
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/favorites" className="hover:bg-sky-700">
                                Favorites
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end text-black">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
