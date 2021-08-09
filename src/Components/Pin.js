import React, {useState} from 'react';
import '../Styles/Pin.css';
export default function Pins({link, author }){

    return(       
        <div className="Pin">
            <img src={link} className="Image" alt="Loading Image..."/>
           <div className="Author">
           <h5>{author}</h5>
           </div>
        </div>
    )
}