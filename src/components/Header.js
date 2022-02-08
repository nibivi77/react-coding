import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="bg-blue-500 flex flex-row bg-white/80 h-[5%] w-[98%] hover:shadow-md mx-auto">
      <div className="lg:mx-36">
        <span className="m-1">Page title</span>
        <Link className="m-1 border-1 border-black" to="/users">
          Users
        </Link>
      </div>
    </div>
  );
};
