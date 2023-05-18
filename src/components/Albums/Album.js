import React, { useEffect, useState, useParams } from 'react';
import axios from 'axios';

function Album(props) {
  const [album, setAlbum] = useState(null);
  const { albumId } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`).then((response) => {
      setAlbum(response.data);
    });
  }, [albumId]);

  return (
     props.userid === album.userId ? (
      <div>
        {album.map((album) => (
          <div key={album?.id} title={album?.title}>
            {album.title}
          </div>
        ))}
      </div>
    ) : null
  );
}

export default Album;
