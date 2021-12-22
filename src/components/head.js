import React from "react";
import { Link } from "react-router-dom";
function Head (){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <>
        <div className="Head">
            <div className="container">
            <div className="brand-block">
            <Link to="/"><h1>Covid-19-india</h1></Link>
            </div>
                <div className="nav-items">
                <p>Date : {date}</p></div>
                </div>
            </div>
        
        </>
    )
}

export default Head;