import { useState, useEffect } from 'react';
import axios from 'axios';

function useAlbum(albumId) {
  const [album, setAlbum] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${albumId}`).then((response) => {
        setAlbum(response.data);
    });
  }, [albumId]);

  return [ album ]  
};

export default useAlbum;