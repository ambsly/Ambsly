import React, { useEffect, useState } from 'react';

const ProductDisplay = ({ currentStyle }) => {
  const [currentImage, setCurrentImage] = useState();

  const imageSelector = (e) => {
    setCurrentImage(e.target.src);
  };

  if (currentStyle) {
    return (
      <div className="gallery">
        <img
          src={currentImage}
          alt=""
          height="300"
        />
        <table>
          {currentStyle.photos.map((image, key) => (
            <tr key={key}>
              <td className="imageTable">
                <input
                  type="image"
                  src={image.url}
                  alt=""
                  width="50"
                  onClick={imageSelector}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }

  return (
    <div>
      <img
        src=""
        alt=""
        width="600"
        height="500"
      />
    </div>
  );
};

export default ProductDisplay;
