import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

const initialProductState = {
  currentItem: {},
  currentItemId: 21570,
  relatedProducts: [],
};
export const globalContext = React.createContext();
export const ItemIdContext = React.createContext(0);
export const relatedProductsContext = React.createContext([]);
export const ItemContext = React.createContext({});
export const FavoritesContext = React.createContext();
export const ProductsContext = React.createContext(initialProductState);
export const ButtonClickedContext = React.createContext(false);

const GlobalStateProvider = ({ children }) => {
  let localState;
  if (JSON.parse(localStorage.getItem('favoriteProducts', '{}')) === null) {
    localState = localStorage.setItem('favoriteProducts', '{}');
  } else {
    localState = JSON.parse(localStorage.getItem('favoriteProducts'));
  }

  const [buttonValue, setButtonValue] = useState(false);
  const [favorites, setFavorites] = useState(localState);
  const [products, setProducts] = useState(initialProductState);

  return (
    <ButtonClickedContext.Provider value={[buttonValue, setButtonValue]}>
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <globalContext.Provider value={[products, setProducts]}>
          <ProductsContext.Provider value={[products, setProducts]}>
            {children}
          </ProductsContext.Provider>
        </globalContext.Provider>
      </FavoritesContext.Provider>
    </ButtonClickedContext.Provider>
  );
};

export default GlobalStateProvider;
