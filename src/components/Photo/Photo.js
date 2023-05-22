import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom'; 
import '../Photo/photo.css';

 
const Photo = () => { 
  const { albumId } = useParams(); 
  const [photos, setPhotos] = useState([]); 
  const [isLoaded, setIsLoaded] = useState(true); 
 
  useEffect(() => { 
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).then((res) => { 
      setPhotos(res.data); 
    }); 
    setIsLoaded(false); 
  }, [albumId]); 
 
  return ( 
    <div className='main'> 
      {isLoaded ? ( 
        <div className='loader'></div> 
      ) : ( 
        photos.map((photo) => ( 
          <div className='main-info photo' key={photo.id}> 
            <img className='img' src={photo.url} alt={photo.title} /> 
            <p className='img-text'>{photo.title}</p> 
          </div> 
        )) 
      )} 
    </div> 
  ); 
}; 
 
export default Photo;