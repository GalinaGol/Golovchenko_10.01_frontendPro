import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Album(props) {
  const [albums, setAlbums] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums/').then((response) => {
      setAlbums(response.data);
    });
  }, [albumId]);

  const filteredAlbums = albums.filter((album) => album.userId === props.userid);

  return (
    <div>
      {filteredAlbums.map((album) => (
        <div key={album.id}>
          {album.title}
        </div>
      ))}
    </div>
  );
}

export default Album;

