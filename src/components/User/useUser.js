
import { useState, useEffect } from 'react';
import axios from 'axios';

function useUser(userId) {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => {
      setUser(response.data);
    });
  }, [userId]);

  return { user };
}

export default useUser;

