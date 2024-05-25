// Product_context.tsx (or Product_context.ts if it's a TypeScript file)

import { createContext, useContext, useReducer, ReactNode } from 'react';
import reducer from '../reducers/products_reducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

// Define the type for the context value
interface ProductsContextType {
  isSidebarOpen: boolean;
  products_loading: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

// Create the context
const ProductsContext = createContext<ProductsContextType>({
  isSidebarOpen: false,
  products_loading: false,
  openSidebar: () => {},
  closeSidebar: () => {},
});

// Define the ProductsProvider component
export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const initialState = {
    isSidebarOpen: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

return (
  <ProductsContext.Provider
    value={{
      ...state,
      openSidebar,
      closeSidebar,
    }}
  >
    {children}
  </ProductsContext.Provider>
);
};

// Define the useProductsContext hook
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

// Define the interface for ProductsProviderProps
interface ProductsProviderProps {
  children: ReactNode;
}

export default ProductsContext;
