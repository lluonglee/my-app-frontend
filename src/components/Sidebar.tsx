
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from "../context/Product_context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  console.log(isSidebarOpen)
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-red-500 transition-transform z-50 ${isSidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
      <div className="flex justify-between items-center px-4 py-6">
        <img src={logo} className="h-12" alt="coding addict" />
        <button className="text-red-dark text-2xl" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="mb-8">
        {links.map(({ id, text, url }) => (
          <li key={id}>
            <Link to={url} onClick={closeSidebar} className="block py-3 px-4 text-base capitalize text-gray-700 transition duration-300 hover:bg-gray-100 hover:text-gray-800">
              {text}
            </Link>
          </li>
        ))}
     
      </ul>
      <CartButtons />
    </div>
  );
};

export default Sidebar;
