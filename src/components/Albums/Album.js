import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Photo from '../Photo/Photo';
import '../styles/user.css';

function Album(props) {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbums, setSelectedAlbums] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => {
      setAlbums(response.data);
    });
  }, [albumId]);

  const filteredAlbums = albums.filter((album) => album.userId === props.userid);

  const handleShowPhoto = (albumId) => {
    setSelectedAlbums((prevSelectedAlbums) => {

      if (prevSelectedAlbums.includes(albumId)) {
        return prevSelectedAlbums.filter((id) => id !== albumId);
      } else {
        return [...prevSelectedAlbums, albumId];
      }
    });
  };


  return (
    <div className='album-container'>
      {filteredAlbums.map((album) => (
        <div key={album.id} className='album-item'>
          {album.title}
          <button
            className="button"
            onClick={() => handleShowPhoto(album.id)}
          >
            Show photos
          </button>
          {selectedAlbums.includes(album.id) && <Photo  albumid = {album.id}/>}
        </div>
      ))}
    </div>
  );
}

export default Album;
