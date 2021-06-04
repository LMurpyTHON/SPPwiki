import React, { useState } from 'react';
import { Switch } from 'react-router';
import '../App.css';
import Card from "../components/Cards/Card";
import Cardor from "../components/Cards/Cardor";
import Card3 from "../components/Cards/Card3";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Read() {
    return (
        <div className="Read">
            <Card/>
            <Cardor/>
            <Card3/>
        </div>
    )


}

export default Read;