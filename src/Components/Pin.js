import React from 'react';
import '../Styles/Pin.css';
import {useDispatch} from 'react-redux';
import {show} from '../actions';

export default function Pins({author, id }){
    const width = 300;
    const height = 400;

    const dispatch = useDispatch();
    const link = (id) => {
        return `https://picsum.photos/id/${id}/${width}/${height}`;
      }
    const click = () => {
        dispatch(show(id));
    }
    return(       
        <div className="Pin">
            <img src={link(id)} className="Image" alt="Loading ..." onClick={click}/>
           <div className="Author">
           <h5>{author}</h5>
           </div>
        </div>
    )
}