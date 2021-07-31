import React, { useContext, useState } from 'react';

export const FavoritesContext = React.createContext();
export const ProductsContext = React.createContext();
export const buttonClickedContext = React.createContext(false);
const GlobalStateProvider = ({ children }) => {
  let localState;

  if (JSON.parse(localStorage.getItem('favoriteProducts', '{}')) === null) {
    localState = localStorage.setItem('favoriteProducts', '{}');
  } else {
    localState = JSON.parse(localStorage.getItem('favoriteProducts'));
  }

  const [buttonValue, setButtonValue] = useState(false);
  const [favorites, setFavorites] = useState(localState);
  const [products, setProducts] = useState([]);

  return (
    <buttonClickedContext.Provider value={[buttonValue, setButtonValue]}>
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <ProductsContext.Provider value={[products, setProducts]}>
          {children}
        </ProductsContext.Provider>
      </FavoritesContext.Provider>
    </buttonClickedContext.Provider>
  );
};

export default GlobalStateProvider;
