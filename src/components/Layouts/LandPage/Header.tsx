import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_MINI.png';

const Header = () => {
  return (
    <header className="w-full bg-gray-50 text-black p-8 h-15 sm:h-20 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md">
      <img src={logo} alt="Logo" width="300px" />
      <nav className="space-x-4">
        <Link to="/login" className="bg-orange-500 rounded-full py-2 px-6">
          Login
        </Link>
        <Link to="/signup" className="bg-orange-500 rounded-full py-2 px-6">
          Crie sua Conta
        </Link>
      </nav>
    </header>
  );
};

export default Header;
