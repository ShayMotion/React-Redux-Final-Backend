import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
    <span>
   <center> <h1>The Guitar Gallery</h1>
    <h3>Buy and Sell Rare Guitars Online</h3>
    <Link to="/signup"> Sign Up </Link>
     or 
    <Link to="/login">  Log In</Link>
    </center>
    </span>
    </div>
     
);

export default Home;