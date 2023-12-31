import React from 'react';
import './HomePage.css';  
import GoogleFormButton from './GoogleFormButton';
import { Link, useLocation } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
          <div className="background-image"></div>
          <div className="content">
            <h1 className="site-title">Fitness Forge</h1>
            <Link to="membership"><button className="get-started-button">Get Started Today</button></Link>
          </div>
          <GoogleFormButton />
        </div>
      );
}


export default HomePage;