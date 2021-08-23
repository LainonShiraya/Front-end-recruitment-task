import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../Styles/Zoom.css';
import {hide} from '../actions';

export default function Zoomed(){

const buttonShow = useSelector(state => state.zoom);
const dispatch = useDispatch();

const clicked = () => {
    dispatch(hide())
}

return(
    <div className={`modal ${buttonShow[1] === 'Show' ? 'Show' : 'Hide'}`}>       
         <div className="modal-content">
         <button className="close" onClick={clicked}><span> &times;</span> </button>
        <img src={buttonShow[0]} alt="Loading..."  className="Image"/>
        </div>
    </div>

)
}