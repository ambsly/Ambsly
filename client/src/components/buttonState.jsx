import React, { useState } from 'react';

if (localStorage.getItem('dataArray') === null) {
  localStorage.setItem('dataArray', '[]');
}
const initialState = {
  buttonClicked: false,
  localStorageArray: localStorage.getItem('dataArray'),
};

export const ClickedContext = React.createContext();

const ButtonState = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <ClickedContext.Provider value={[state, setState]}>
      {children}
    </ClickedContext.Provider>
  );
};

export default ButtonState;
