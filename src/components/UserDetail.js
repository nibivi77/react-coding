import { Link } from 'react-router-dom';

export const UserDetail = ({ user }) => {
  return (
    <li className="border-2 border-red-700 rounded m-2">
      <Link to={`${user.id}`}>
        <div>
          <h1 className="text-xl font-semibold">{user.username}</h1>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
        <div className="mt-4">
          <p className="font-bold underline">Address</p>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
          <h3 className="font-bold underline mt-4">Geo</h3>
          <ul>
            <li>{user.address.geo.lat}</li>
            <li>{user.address.geo.lng}</li>
          </ul>
        </div>
      </Link>
    </li>
  );
};
