import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
`;

const Selector = styled.div`
padding: 0.5rem .25rem;
background-color: transparent;
border: 2px solid black;
`;

const ProductSelection = ({ styles }) => (
  <>
    <Container>
      <Selector>
        <label htmlFor="size-selector">SELECT SIZE</label>
        <select name="size-selector" id="size-selector">
          <option value="small">Small </option>
          <option value="medium">Medium </option>
          <option value="large">Large </option>
        </select>
      </Selector>
      <Selector>
        <label htmlFor="qty-selector">Qty</label>
        <select name="qty-selector" id="qty-selector">
          <option value="1">1 </option>
          <option value="2">2 </option>
          <option value="3">3 </option>
        </select>
      </Selector>
    </Container>
    <Container>
      <Selector>
        <button type="button" name="add-to-bag" id="add-to-bag">Add to Bag </button>
      </Selector>
      <Selector>
        <button type="button" name="favorite" id="favorite">☆ </button>
      </Selector>
    </Container>
  </>
);

export default ProductSelection;
