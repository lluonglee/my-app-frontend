import { useProductsContext } from "@/context/Product_context";
import { useAuth0 } from "@auth0/auth0-react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import UsernameMenu from "./UsernameMenu";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="flex items-center px-3  ">
      <Link
        to="/cart"
        className='flex items-center "text-base" text-[1.5rem]  '
        onClick={closeSidebar}
      >
        Cart
        <span className="cart-container">
          <FaShoppingCart />
        </span>
      </Link>
      <span className="flex space-x-2 items-center">
        {isAuthenticated ? (
          <UsernameMenu />
        ) : (
          <button
            className='flex items-center px-3 "text-base text-[1.5rem]'
            onClick={async () => await loginWithRedirect()}
          >
            Login <FaUserPlus />
          </button>
        )}
      </span>
    </div>
  );
};

export default CartButtons;
