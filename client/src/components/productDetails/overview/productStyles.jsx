import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyleImage = styled.input`
  padding: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  background-position: center center;
`;

const ProductStyles = ({ styles, changeStyle }) => {
  console.log('Styles from styles: ', styles);

  const onStyleClick = (e) => {
    // console.log(e.target.id);
    changeStyle(styles[e.target.id]);
  }

  return (
    <div>
      {styles.map((style, key) => (
        <StyleImage
          type="image"
          src={style.photos[0].thumbnail_url}
          id={key}
          alt=""
          onClick={onStyleClick}
        />
      ))}
    </div>
  );
};

export default ProductStyles;


// return (
//   <table border="1">
//     <tbody>
//       <tr>
//         <td> Style 1 </td>
//         <td> Style 2 </td>
//         <td> Style 3 </td>
//         <td> Style 4 </td>
//       </tr>
//       <tr>
//         <td> Style 5 </td>
//         <td> Style 6 </td>
//         <td> Style 7 </td>
//         <td> Style 8 </td>
//       </tr>
//       {styleList.map((style) => (
//           <td height="25px" width="50px" >{style}</td>
//         ))}
//     </tbody>
//   </table>
// );