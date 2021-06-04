import React, { useState } from 'react';
import "./Card.css";
import { Route} from "react-router";
import { Link } from "react-router-dom";

function Cardor() {

    const [about, setAbout] = useState('Albert');

    return ( 

        <div className="Card">
                <div className="upper-container">
                    <div className="image-container">
                        <img className="img" src="https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg" alt="" height="100px" width="100px" />
                    </div>
                <div className="lower-container">
                    <p className="Ps"> {about} </p>
                    <Link to="./Albert"><button className="button">View more</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Cardor;
