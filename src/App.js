import React, {useState, useRef, useCallback} from 'react';
import './Styles/App.css';
import scrolling from './Components/Scrolling';
import Pin from './Components/Pin';
import logo from './Pinterest-Logo.png'

function App() {

  const[pageNumber, setPageNumber] = useState(1);

  const {
    hasMore,
    images
  } = scrolling(pageNumber);

  const observer = useRef();
  const lastImageElementRef = useCallback(node => {
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber +1);
      }
    })
    if(node) observer.current.observe(node)
  }, [hasMore]);

  return (
    <div className="App">
      <div className="Nav-bar">
        <div className="Logo">
        <img src={logo} alt="logo"/>
        </div>      
        <ul>                    
          <li> <button className="Register"> Zarejestruj się </button> </li>   
          <li> <button className="Login"> Zaloguj się</button> </li> 
          <li> <a href="#Blog"> Blog </a></li>        
          <li> <a href="#Dla_firm"> Dla firm </a></li>
          <li> <a href="#Informacje">Informacje</a></li>       
        </ul>
      </div>
      <div className="Images">
    {images.map( (image,index) => {
      if(images.length === index +1){
      return <div key={image.id} ref={lastImageElementRef}> <Pin  key={image.id} author ={image.author} link={image.download_url}/> </div>
      } else{ 
       return <div key={image.id}><Pin  key={image.id} author ={image.author} link={image.download_url} /></div>
      }     
    })}
    </div>
    </div>
  );
}

export default App;
