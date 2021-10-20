import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

const initialProductState = {
  currentItem: {},
  currentItemId: 6256,
  relatedProducts: [],
};

const globalCaroselImg = {
  currentRelatedID: 0,
  currentRelatedImg: '',
};
export const CarouselImg = React.createContext();
export const GlobalContext = React.createContext();
export const ItemIdContext = React.createContext(0);
export const relatedProductsContext = React.createContext([]);
export const ItemContext = React.createContext({});
export const FavoritesContext = React.createContext();
export const ProductsContext = React.createContext();
export const ButtonClickedContext = React.createContext(false);

const GlobalStateProvider = ({ children }) => {
  let localState;
  if (JSON.parse(localStorage.getItem('favoriteProducts', '{}')) === null) {
    localState = localStorage.setItem('favoriteProducts', '{}');
  } else {
    localState = JSON.parse(localStorage.getItem('favoriteProducts'));
  }

  const [globalImg, setGobalImg] = useState(globalCaroselImg);
  const [buttonValue, setButtonValue] = useState(false);
  const [favorites, setFavorites] = useState(localState);
  const [products, setProducts] = useState(initialProductState);

  return (
    <ButtonClickedContext.Provider value={[buttonValue, setButtonValue]}>
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <GlobalContext.Provider value={[products, setProducts]}>
          <ProductsContext.Provider value={[products, setProducts]}>
            <CarouselImg.Provider value={[globalImg, setGobalImg]}>
              {children}
            </CarouselImg.Provider>
          </ProductsContext.Provider>
        </GlobalContext.Provider>
      </FavoritesContext.Provider>
    </ButtonClickedContext.Provider>
  );
};

export default GlobalStateProvider;
