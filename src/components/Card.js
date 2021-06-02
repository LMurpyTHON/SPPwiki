import React from 'react';
import { Route } from 'react-router';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({title, imageUrl, body}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            </div>
            <div className="btn">
            <Link to="./WW1"><button>View more</button></Link>
            </div>
        </div>
    )
}

export default Card;
