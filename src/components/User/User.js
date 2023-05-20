import React, { useState } from 'react';
import useUser from "./useUser";
import { useParams } from "react-router-dom";
import Album from '../Albums/Album';

import '../styles/user.css';

const User = () => {
  const { userId } = useParams();
  const { user } = useUser(userId);
  const [buttonShow, setButtonShow] = useState(false);
  
  if (!user) {
    return <div>Loading...</div>;
  }

  const handleChangeButton = () => {
    setButtonShow(!buttonShow);
  };

  return (
    <div className='user-item'>
      <h2>About User</h2>
      <div className='user-info'>name: {user?.name}</div>
      <div className='user-info'>username: {user?.username}</div>
      <div className='user-info'> email: {user?.email}</div>
      {buttonShow ? (
        <div className='album-wrap'>
          <button className="button" onClick={handleChangeButton}>
          Close Albums
          </button>
          <Album userid = {user.id}/>
        </div>
      ) : (
        <div className='album-wrap'>
          <button className="button" onClick={handleChangeButton}>
          Show Albums
          </button>
        </div>
      )}
    </div>
  );
}


export default User;
