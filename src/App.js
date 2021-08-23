import React from 'react';
import './Styles/App.css';
import scrolling from './Components/Scrolling';
import {useSelector} from 'react-redux';
import Navbar from './Components/Navbar';
import Images from './Components/Images';
import Zoomed from './Components/Zoomed';


function App() {

  const pageNumber = useSelector((state => state.page));

 scrolling(pageNumber);

  return (
    <div className="App">
    <Zoomed />
    <Navbar/>
    <Images />
    </div>
  );
}
export default App;
