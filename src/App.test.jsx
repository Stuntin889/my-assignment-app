import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('shows my name on the page', () => {
  render(<App />);
  expect(screen.getByText('Imaekhai Christopher')).toBeInTheDocument();
});