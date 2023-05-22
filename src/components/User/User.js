import axios from 'axios'; 
import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../User/user.css';
 
const User = () => { 
  const [users, setUsers] = useState([]); 
  const [isLoaded, setIsLoaded] = useState(true); 
 
  useEffect(() => { 
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => { 
      setUsers(response.data); 
    }); 
    setIsLoaded(false); 
  }, []); 
 
  return ( 
    <div className='main'> 
      {isLoaded ? ( 
        <div className='loader'></div> 
      ) : ( 
        users.map((user) => ( 
          <div className='main-info' key={user.id}> 
            <div> 
              <h3>{user.name}</h3> 
              <p>Username: {user.username}</p> 
              <p>Email: {user.email}</p> 
            </div> 
            <Link to={`/users/${user.id}/albums`} className='link-btn'> 
              Albums 
            </Link> 
          </div> 
        )) 
      )} 
    </div> 
  ); 
}; 
 
export default User;
