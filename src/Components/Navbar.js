import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Images/Pinterest-Logo.png'
export default function Navbar(){

    return (
        <div className="Nav-bar">
        <div className="Logo">
        <img src={logo} alt="logo"/>
        </div>      
        <ul>                    
          <li> <button className="Register"> Zarejestruj się</button> </li>   
          <li> <button className="Login"> Zaloguj się</button> </li> 
          <li> <a href="#Blog"> Blog </a></li>        
          <li> <a href="#Dla_firm"> Dla firm</a></li>
          <li> <a href="#Informacje">Informacje</a></li>       
        </ul>
      </div>
    );
}