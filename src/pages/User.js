import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserDetail } from '../components/UserDetail';

export const User = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((e) => console.log(e));
  }, [userId]);

  // return <UserDetail user={user}/>;
  return <div>{user.name}</div>;
};
