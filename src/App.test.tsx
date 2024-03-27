import { render, screen } from '@testing-library/react';
import App from './App';
import { getSortTicketsItemsInString } from './utils/tools.utils';
import { staticTicketsDataForTest } from './utils/tools.constants';

test('render HTML text', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/Paris, London, Amsterdam, Berlin/i);
  expect(linkElement).toBeInTheDocument();
});

test('function new data', () => {
  const result = getSortTicketsItemsInString(staticTicketsDataForTest)

  expect(result).toBe('London, LA, Berlin, Paris, Tehran');
});

test('function empty array', () => {
  const result = getSortTicketsItemsInString([])

  expect(result).toBe('');
});