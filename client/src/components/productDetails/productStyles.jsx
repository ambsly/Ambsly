import React, { useState, useEffect } from 'react';

const ProductStyles = ({ styles }) => {
  // if (!styles) {
  //   return (
  //     <></>
  //   );
  // }

  // const [styleList, setStyles] = useState([]);

  // useEffect(() => {
  //   setStyles(styles);
  // });

  console.log(styles);

  return (
    <table BORDER="1">
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

    </table>
  )
};

export default ProductStyles;
