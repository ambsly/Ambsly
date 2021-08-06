/* eslint-disable no-undef */

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import QAndA from '../QAndA';
const QAndA = require('../QAndA');

// // const { test, expect } = require('jest');
// // const QAndA = require('./QAndA');

// // test('Title is correct', () => {
// //   expect(typeof QAndA).toEqual('function');
// // });

// it('should have correct title', () => {
//   render(<QAndA />);
// });

test('Q and A component should exist', () => {
  expect(QAndA).toBeDefined();
});

// For async code in test, pass in done
test('Questions should be more than 0', (done) => {
  expect(QAndA.questions.length).toBeGreaterThan(0);
  // then invoke done after async code
  done();
});
