/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/dom';
// import '@testing-library/jest-dom/extend-expect';
// const axios = require('axios');
const QAndA = require('../QAndA');

// // test('Title is correct', () => {
// //   expect(typeof QAndA).toEqual('function');
// // });

// it('should have correct title', () => {
//   render(<QAndA />);
// });
beforeEach();

test('Q and A component should exist', () => {
  expect(QAndA).toBeDefined();
});

test('Q and A title should exist', () => {
  const QATitle = screen.getByText('Questions & Answers');
  expect(QATitle).toBe('Questions & Answers');
});

// // For async code in test, pass in done
// test('Questions should be more than 0, with timeout', (done) => {
//   setTimeout(() => {
//     expect(QAndA.questions.length).toBeGreaterThan(0);
//     done();
//     // then invoke done in async code
//   }, 200);
// });

// // For async code in test, pass in done
// test('Questions should be more than 0, with get request', (done) => {
//   axios.get('qa/questions/25171')
//     .then(({ data }) => {
//       expect(data.length).toBeGreaterThan(0);
//       done();
//       // then invoke done in async code
//     });
// });

// // Async await
// test('Questions should be more than 0, with get request', async () => {
//   const { data } = await axios.get('qa/questions/25171');
//   expect(data.length).toBeGreaterThan(0);
// });
