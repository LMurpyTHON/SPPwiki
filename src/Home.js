import React from 'react';
import './App.css';

function Home() {
    return (
        <div>
            <h1 className="mainmenu-h1">Main Menu</h1>
            <div className="mainmenu-div">
                <p className="mainmenu-p">Read our articles <br/> <br/> Each day, a summary (roughly 975 characters long) of one of Wikipedia's featured articles (FAs) appears at the top of the Main Page as Today's Featured Article (TFA). The Main Page typically gets around 15 million hits per day.</p>
                <p className="mainmenu-p">Check Georgia's newspaper <br/> <br/> <a href="https://georgiatoday.ge/" target="_blank"><img src="http://getdrawings.com/free-icon/google-news-icon-69.png" width="250px" height="250px"/></a></p>
            </div>
        </div>
    );
}

export default Home;