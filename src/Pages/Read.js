import React from 'react';
import { Switch } from 'react-router';
import '../App.css';
import Card from "../components/Card";
import WW1 from "../components/WW1";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Read() {

    return (
        <div className="Read">
            <Switch>
            <Route path="/WW1" component={WW1}/>
            </Switch>
            <Card title='WW1'
            imageUrl='https://www.sciencenews.org/wp-content/uploads/2020/07/072320_ec_wormhole_feat-800x450.jpg'
            body='Wormhole'
            />
        </div>
    )


}

export default Read;