/* eslint-disable no-undef */

// const axios = require('axios');
const QAndA = require('../QAndA');

// // test('Title is correct', () => {
// //   expect(typeof QAndA).toEqual('function');
// // });

// it('should have correct title', () => {
//   render(<QAndA />);
// });

test('Q and A component should exist', () => {
  expect(QAndA).toBeDefined();
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
