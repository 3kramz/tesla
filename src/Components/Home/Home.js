import React from 'react';
import HomeReview from '../HomeReview/HomeReview';
import './home.css'
import img from './tesla-removebg-preview.png'

const Home = () => {
    return (<>
            <div className="home">
                <div className="data">
                        <p className="plaid">Plaid</p>
                        <p className="beyond">Beyond Ludicrous</p>
                        <p className="text">Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
                        <button className="btn-order">ORDER NOW</button>

                </div>
                <div className="home-img">
                    <img src={img} alt=""/>
                </div>
            </div>
     
            <HomeReview></HomeReview>
        </>
    );
};

export default Home;