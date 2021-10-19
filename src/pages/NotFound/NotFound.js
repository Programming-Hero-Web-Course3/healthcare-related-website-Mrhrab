import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div id="notFound" className="not-found mt-2">
            
                <img src="https://i.ibb.co/CmfRk8m/2417237-1.jpg" alt="" />
                <h3><Link to="/home"><button className="btn-success my-5">GO Back</button></Link></h3>
            
        </div>
    );
};

export default NotFound;