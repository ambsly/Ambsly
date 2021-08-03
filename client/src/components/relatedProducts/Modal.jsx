import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { ProductsContext } from '../globalState.jsx';

const MODAL_STYLES = {
  display: 'flex',
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100vh',
  zIndex: 1000,
  alignItems: 'center',
  justifyContent: 'center',
};

const Inner_MODAL_STYLES = {
  width: 500,
  height: 500,
  backgroundColor: 'aquamarine',
};
function Modal({
  open, children, onClose, card,
}) {
  const [products, setProducts] = useContext(ProductsContext);
  // console.log(products.relatedProducts, 'looking at this');
  // console.table(products.currentItem.features);

  const compareArray = [];
  const cardFeatures = [];
  const currentFeatures = [];
  for (let i = 0; i < card.features.length; i += 1) {
    compareArray.push(card.features[i].feature);
    cardFeatures.push(card.features[i].feature);
  }
  for (let i = 0; i < products.currentItem.features.length; i += 1) {
    compareArray.push(products.currentItem.features[i].feature);
    currentFeatures.push(products.currentItem.features[i].feature);
  }

  for (let i = 0; i < compareArray.length; i += 1) {
    let cardFeature = 'false';
    let currentFeature = 'false';
    if (cardFeatures.includes(compareArray[i])) {
      cardFeature = 'true';
    }
    if (currentFeatures.includes(compareArray[i])) {
      currentFeature = 'true';
    }
    compareArray[i] = [currentFeature, compareArray[i], cardFeature];
  }

  // console.log(cardFeatures);
  // console.log(currentFeatures);

  const modalCompares = compareArray.map((array) => (
    <tr>
      <td>{[array[0]]}</td>
      <td>{[array[1]]}</td>
      <td>{[array[2]]}</td>
      <td><i className="fa fa-remove" /></td>
      <td><i className="fa fa-check" /></td>
    </tr>
  ));

  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <div style={MODAL_STYLES}>
      <div style={Inner_MODAL_STYLES}>
        Comparing
        <table>
          <tbody>
            <tr>
              <th>Item1</th>
              <th>Features</th>
              <th>Item2</th>
              <td><i className="fa fa-remove" /></td>
              <td><i className="fa fa-check" /></td>
            </tr>
            {modalCompares}
          </tbody>
        </table>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </div>,
    document.getElementById('app'),
  );
}

export default Modal;
