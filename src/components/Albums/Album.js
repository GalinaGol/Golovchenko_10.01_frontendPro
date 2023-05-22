import axios from 'axios'; 
import React, { useEffect, useState } from 'react'; 
import { Link, useParams } from 'react-router-dom'; 


 
const Album = () => { 
  const [albums, setAlbums] = useState([]); 
  const { userId } = useParams(); 
  const [isLoaded, setIsLoaded] = useState(true); 
 
  useEffect(() => { 
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then((response) => { 
      setAlbums(response.data); 
    }); 
    setIsLoaded(false); 
  }, [userId]); 
 
  return ( 
    <div className='main'> 
      {isLoaded ? ( 
        <div className='loader'></div> 
      ) : ( 
        albums.map((album) => ( 
          <div key={album.id} className='main-info'> 
            <h4>Album: </h4> 
            <p>{album.title}</p> 
            <Link to={`/albums/${album.id}/photos`} className='link-btn'> 
              Photos 
            </Link> 
          </div> 
        )) 
      )} 
    </div> 
  ); 
}; 
 
export default Album;