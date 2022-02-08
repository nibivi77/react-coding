import { UserDetail } from '../components/UserDetail';
import { useEffect, useState } from 'react';

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const displayUsers = () => {
    return users.map((user) => {
      return( <UserDetail user={user} key={user.id} />);
    });
  };
  return (<ul className="">{displayUsers()}</ul>);
};
