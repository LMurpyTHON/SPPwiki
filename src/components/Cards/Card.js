import { dom } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import './Card.css';
import { Route} from "react-router";
import { Link } from "react-router-dom";


function Card() {

    const [about, setAbout] = useState('Wormhole');

    return ( 

        <div className="Card">
                <div className="upper-container">
                    <div className="image-container">
                        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ky63epx1sQPOQR6iuBeIUWW-BKEMhLJR7Q&usqp=CAU" alt="" height="100px" width="100px" />
                    </div>
                <div className="lower-container">
                    <p className="Ps"> {about} </p>
                    <Link to="./WW1"><button className="button">View more</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
