import { useEffect,useState } from 'react';
import axios from 'axios';

export default function Scrolling(pageNumber){

    const[hasMore, setHasMore] = useState(false);
    const[images,setImages] = useState([]);
    useEffect(() => {
        axios({
            method:'GET',
            url: `https://picsum.photos/v2/list?page=${pageNumber}&limit=25`,
        }).then(response => {
            setImages(prevImages => {
                return [...new Set([...prevImages, ...response.data])]
            })
            setHasMore(response.data.length > 0)
            })
    },[pageNumber]);
    return {images, hasMore}
}