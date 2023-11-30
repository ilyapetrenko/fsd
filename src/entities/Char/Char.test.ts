import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
// import { screen } from '@testing-library/dom';
// import { Char } from './Char';
//
// const testChar = {
//   name: 'Test Character',
//   status: 'Alive',
//   species: 'Human',
//   gender: 'Male',
//   location: {
//     name: 'Earth',
//   },
//   image: 'test-image-url',
// };

test('Adding 2 and 2 equals 4', () => {
  const result = 2 + 2;
  expect(result).toBe(4);
});

// test('Char component renders correctly', () => {
//   render(<Char char={testChar} />);
//
//   expect(screen.getByText(testChar.name)).toBeInTheDocument();
// });
