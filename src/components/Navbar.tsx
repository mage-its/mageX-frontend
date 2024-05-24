import { useState } from "react";
import './styles/Navbar.css';
import x from '../assets/brand/logo.svg';
import cn from '../utils/cn';

const Navbar: React.FC = () => {
  const [rotate, setRotate] = useState(false);

  const handleLogoClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000);
  };

  return (
    <nav className="bg-gray-800 md:px-[50px] text-white max-h-16">
      <ul className="flex space-x-4 justify-center">
        {/* Logo */}
        <li style={{ marginRight: 'auto', overflow: 'visible' }}>
          <img src={x}
            alt="X"
            className={cn(
              "cursor-pointer mx-auto select-none size-14", 
              { rotate }
            )}
            onClick={handleLogoClick}    
          />
        </li>
        {/* Home (aktif secara default) */}
        <li style={{ marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto' }}>
          <p>
            Home
          </p>
        </li>
        {/* Competition */}
        <li style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <p>
            Competition
          </p>
        </li>
        {/* Workshop */}
        <li style={{ marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}>
          <p>
            Workshop
          </p>
        </li>
        {/* Login */}
        <li style={{ marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto' }}>
          <p>
            Login
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;