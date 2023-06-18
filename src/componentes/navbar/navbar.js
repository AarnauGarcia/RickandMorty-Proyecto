import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import "../../App.css";

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
            <div className="container">
                <Link to="/" className="fs-3 ubuntu navbar-brand">   
                    Proyecto Rick&Morty
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <NavLink activeClassName="active" to="/" className="nav-link">Personajes</NavLink>
                    </div>
                </div>
            </div>s
        </nav>
    )
}

export default navbar
