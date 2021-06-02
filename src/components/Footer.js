import React from 'react';
import '../App.css';

function footer() {
    return (
        <div class="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text"><span>Wikipedia v2</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p><p> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <div className="contact">
                        <i className="fas fa-phone">Contact: 592 78 41 41</i>
                        <br/>
                        <br/>
                        <i className="fas fa-envelope">Gmail: Kopalianisandro2@gmail.com</i>
                        <br/>
                        <br/>
                        <div className="socials">
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer