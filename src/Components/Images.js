import React, {useRef, useCallback} from 'react';
import '../Styles/App.css';
import Pin from './Pin';
import {useSelector, useDispatch} from 'react-redux';
import {setPage} from '../actions';
export default function Images(){

    const loading = useSelector(state => state.loading);
    const hasMore = useSelector(state => state.more);
    const images = useSelector((state => state.display));
    const dispatch = useDispatch();
    
  const observer = useRef();
  const lastImageElementRef = useCallback(node => {
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore && loading === false) {
       dispatch(setPage());
      }
    })
    if(node) observer.current.observe(node)
  }, [dispatch, hasMore,loading]);

return(
    <div className="Images">
    {images.map((image,index) => {
      if(images.length === index +1){
      return <div key={image.id} ref={lastImageElementRef}> <Pin  key={image.id} author ={image.author} id={image.id}/> </div>
      } else{ 
       return <div key={image.id}><Pin  key={image.id} author ={image.author} id={image.id} /></div>
      }     
    })}
    </div>
)
}