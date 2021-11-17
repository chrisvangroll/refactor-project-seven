import React from 'react';
import {Link } from 'react-router-dom';
import logo from '../../images/recolored-logo.webp';




function Nav (props) {
    return(
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img class="navbar-brand logo" alt='Groupomania' src= {logo}></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars navbar-toggler-icon"></i>
                    </button>
                    <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class='nav-link active' to="/forum" aria-current="page">Forum</Link> 
                            </li>
                            <li class="nav-item">
                                <Link class='nav-link' to="/create">Create Post</Link> 
                            </li>
                            <li class="nav-item">
                                <Link class='nav-link' to="/account">Account</Link> 
                            </li>
                            <li class="nav-item">
                                <Link class='nav-link' to="/">Log Out</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;