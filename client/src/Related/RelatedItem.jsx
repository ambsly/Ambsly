import React from 'react';
import axios from 'axios';

function RelatedItem({ cardInfo, ...rest }) {
  const {
    // eslint-disable-next-line react/prop-types
    id, campus, name, slogan, description, category, create_At,
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line camelcase
    default_Price, ...rests
  } = cardInfo;
  console.log(id, campus, 'testing deconstructoring');

  return (
    <ul>
      {id}
    </ul>

  );
}

export default RelatedItem;
