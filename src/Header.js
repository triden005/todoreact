import React from "react";
import "./header.css"
function Header(){
    return( 
    <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div> );
};
export default Header;