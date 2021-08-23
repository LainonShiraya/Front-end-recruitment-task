import { useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setHasMore, setImages, setLoading} from '../actions';

export default function Scrolling(pageNumber){


    const images = useSelector(state => state.display);
    const hasMore = useSelector(state => state.more);
    const dispatch = useDispatch();
    useEffect(() => {     
        dispatch(setLoading(true));
        axios({
            method:'GET',
            url: `https://picsum.photos/v2/list?page=${pageNumber}&limit=25`,
        }).then(          
            response => {
                dispatch(setImages( response.data
                ));
          dispatch(setLoading(false));
          dispatch(setHasMore(response.data.length > 0));
          console.log(response.data.length);
           })
    },[dispatch, pageNumber]);
    return {images, hasMore}
}