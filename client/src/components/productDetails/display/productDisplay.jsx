import React, { useEffect, useState } from 'react';

const ProductDisplay = ({ currentStyle }) => {
  if (!currentStyle) {
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
  }

  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setCurrentImage(currentStyle.photos[0].url);
  }, []);

  const imageSelector = (e) => {
    setCurrentImage(e.target.src);
  };

  return (
    <div className="gallery">
      <img
        src={currentImage}
        alt=""
        height="300"
      />
      <table>
        <tbody>
          <tr>
            {currentStyle.photos.map((image, key) => (
              <td className="imagePreview" key={key}>
                <input
                  type="image"
                  src={image.url}
                  alt=""
                  height="50"
                  onClick={imageSelector}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDisplay;
