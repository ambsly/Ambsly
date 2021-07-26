import React, { useState, useEffect } from 'react';

const ProductStyles = ({ styles }) => (
  <table border="1">
    <tbody>
      <tr>
        <td> Style 1 </td>
        <td> Style 2 </td>
        <td> Style 3 </td>
        <td> Style 4 </td>
      </tr>
      <tr>
        <td> Style 5 </td>
        <td> Style 6 </td>
        <td> Style 7 </td>
        <td> Style 8 </td>
      </tr>
      {/* {styleList.map((style) => (
          <th height="25px" width="50px" >{style}</th>
        ))} */}
    </tbody>
  </table>
);

export default ProductStyles;
