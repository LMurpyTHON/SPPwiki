import React from 'react';
import NotFound from "../Imgs/NotFound.png";
import "../App.css";

export default function PageNotFound() {
    return (
        <div>
            <div className="divnot">
            <p className="notfound">404 Page not found</p>
            <img src={NotFound} width="200px" height="350px" className="notfoundimg"/>
            </div>
            <p className="pagenot">This page wasn't found by site.. Try to search it in another platform </p>
        </div>
    )
}
