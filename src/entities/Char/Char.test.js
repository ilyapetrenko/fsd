import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Char } from './Char';
import expect from 'expect'

const testChar = {
  name: 'Test Character',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  location: {
    name: 'Earth',
  },
  image: 'test-image-url',
};

test('Char component renders correctly', () => {
  const { getByText, getByAltText } = render(<Char char={testChar} />);

  expect(getByText(testChar.name)).toBeInTheDocument();
  expect(getByText(testChar.status)).toBeInTheDocument();
  expect(getByText(testChar.species)).toBeInTheDocument();
  expect(getByText(testChar.gender)).toBeInTheDocument();
  expect(getByText(testChar.location.name)).toBeInTheDocument();

  expect(getByAltText(testChar.name)).toHaveAttribute('src', testChar.image);
});
