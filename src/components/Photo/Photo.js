import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Photo(props) {
  const [photos, setPhotos] = useState([]);
  const { photoId } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/`).then((response) => {
      setPhotos(response.data);
    });
  }, [photoId]);

  const filteredPhotos = photos.filter((photo) => photo.albumId === props.albumid);

  return (
    <div>
      {filteredPhotos.map((photo) => (
        <div key={photo.id}>
        <img src={photo.url} alt={photo.id} />
        </div>
      ))}
    </div>
  );
}

export default Photo;
