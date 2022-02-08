import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-500 h-screen">
      <Header />
      <Link className="lg:mx-36" to="/users">
        See all users
      </Link>
      <Footer />
    </div>
  );
}

export default App;
