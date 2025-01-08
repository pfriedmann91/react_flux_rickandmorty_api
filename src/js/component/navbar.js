import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid">
                <a className="navbar-brand mb-0" href="/">
                    <h2 className="display-4 m-0">Rick and Morty</h2>
                </a>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites ({store.favorites.length})
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favorites.length > 0 ? (
                                store.favorites.map((fav, index) => (
                                    <li key={index} className="dropdown-item d-flex justify-content-between">
                                        {fav}
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => actions.addFavorite(fav)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li className="dropdown-item">No favorites added</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
