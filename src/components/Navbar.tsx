
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/Product_context";
import CartButtons from "./CartButtons";
const Nav = () => {
  const { openSidebar} = useProductsContext();
  console.log(openSidebar);
 
  return (
    <nav className="bg-white">
      <div className="container px-4 flex items-center justify-between">
        <div className="flex items-center justify-between h-16  ">
          <Link to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>
        </div>
        <ul className="flex items-center  ">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li
                key={id}
                className="px-4 text-base cursor-pointer md:block sm:hidden leading-relaxed text-gray-500 "
              >
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="md:block sm:hidden ">
          <CartButtons />
        </div>
        <button className="md:hidden sm:block text-3xl" onClick={openSidebar}>
          <FaBars />
        </button>
        
      </div>
    </nav>
  );
};

export default Nav;
