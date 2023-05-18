import React, { useState } from 'react';
import useUser from "./useUser";
import { useParams } from "react-router-dom";
import Album from '../Albums/Album';

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
    <div>
      <div>{user?.name}</div>
      <div>{user?.id}</div>
      {buttonShow ? (
        <div>
          <button className="button" onClick={handleChangeButton}>
          Close Albums
          </button>
        </div>
      ) : (
        <div>
          <button className="button" onClick={handleChangeButton}>
          Show Albums
          </button>
          <Album userid = {user.id}/>
        </div>
      )}
    </div>
  );
}


export default User;
