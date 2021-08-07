import React, { useContext } from 'react';
import styled from 'styled-components';
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

const ModalTD = styled.td`
padding-right: 10px;
`;

const StyledTable = styled.table`
`;

const StyledModalContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-content: space-between;
flex-direction: column;
`;

const StyledSpan = styled.span`
font-size: 28px;
font-weight: bold;
position: absolute;
margin: 10px;
padding: 10px;
top: -50px;`;

const StyledInnerModal = styled.div`
position: relative;
top: 100%;
display: flex;
width: 1000px;
height: 80px;
border: 1px solid #000;
`;
function Modal({
  open, children, onClose, card,
}) {
  const [products, setProducts] = useContext(ProductsContext);
  // console.log(products.relatedProducts, 'looking at this');
  // console.table(products.currentItem.features);

  let compareArray = [];
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

  compareArray = new Set(compareArray);
  compareArray = [...compareArray];

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

  const Item1 = [];
  const Features = [];
  const Item2 = [];

  for (let i = 0; i < compareArray.length; i += 1) {
    if (compareArray[i][0] === 'true') {
      Item1.push(
        <td>
          <span className="material-icons check">
            check
          </span>
        </td>,
      );
    } else {
      Item1.push(
        <td>
          <span className="material-icons clear">
            clear
          </span>
        </td>,
      );
    }
    if (compareArray[i][2] === 'true') {
      Item2.push(
        <td>
          <span className="material-icons check">
            check
          </span>
        </td>,
      );
    } else {
      Item2.push(
        <td>
          <span className="material-icons clear">
            clear
          </span>
        </td>,
      );
    }

    Features.push(
      <td>
        {compareArray[i][1]}
      </td>,
    );
  }

  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <div style={MODAL_STYLES}>

      <StyledInnerModal>
        <StyledSpan>
          Comparing Products
        </StyledSpan>

        <StyledModalContainer>

          <table>
            <tr>
              <th>{products.currentItem.name}</th>
              {Item1}
            </tr>
            <tr>
              <th>Features</th>
              {Features}
            </tr>
            <tr>
              <th>{card.name}</th>
              {Item2}
            </tr>
          </table>

          {children}
        </StyledModalContainer>

      </StyledInnerModal>

    </div>,
    document.getElementById('app'),
  );
}

export default Modal;
