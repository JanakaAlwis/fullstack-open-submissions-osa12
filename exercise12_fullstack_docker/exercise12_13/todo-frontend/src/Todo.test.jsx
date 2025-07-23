import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from './Todo';

test('renders todo text', () => {
  const todo = { text: 'Learn Docker' };
  render(<Todo todo={todo} />);
  expect(screen.getByText('Learn Docker')).toBeInTheDocument();
});
