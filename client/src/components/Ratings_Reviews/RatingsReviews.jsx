import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './overview/overview.jsx';
import ReviewList from './reviewList/reviewlist.jsx';

const Container = styled.div`
  display: flex;
`;

const Header = styled.div`
  font-size: 24px;
`;

// class RatingsAndReviews extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productData: [],
//     };
//   }

//   componentDidMount() {
//     axios.get('/reviews', {
//       params: { product_id: 25167 },
//     })
//       .then((results) => {
//         console.log('results from within comDidMount', results.data);
//         this.setState({
//           productData: results.data,
//         });
//       })
//       .catch((err) => {
//         console.log('err msg', err);
//       });
//   }

//   render() {
//     return (
//       <>
//         <Header>Ratings and Reviews</Header>
//         <Container>
//           <Overview productID={this.state.productData} />
//           <ReviewList />
//         </Container>
//       </>
//     );
//   }
// }

const RatingsAndReviews = () => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    axios.get('/reviews', {
      params: { product_id: 25167 },
    })
      .then((results) => {
        setProductData(results.data);
      })
      .catch((err) => {
        console.log('somethin not working right w this hook', err);
      });
  }, []);

  return (
    <>
      <Header>Ratings and Reviews</Header>
      <Container>
        <Overview product={productData} />
        <ReviewList />
      </Container>
    </>
  );
};

export default RatingsAndReviews;
