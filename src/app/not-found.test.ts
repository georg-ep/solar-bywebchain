import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

describe('NotFound Component', {
  retries: 2,
}, () => {
  it('should render the not found message', () => {
    render(<NotFound />);
    const messageElement = screen.getByText(/Not Found/i);
    expect(messageElement).toBeInTheDocument();
  });

  it('should render the correct heading', () => {
    render(<NotFound />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/404/i);
  });

  it('should render a link to the home page', () => {
    render(<NotFound />);
    const linkElement = screen.getByRole('link', { name: /Go back to home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('should have a specific class name for the container', () => {
    render(<NotFound />);
    const container = screen.getByTestId('not-found-container');
    expect(container).toBeInTheDocument();
  });
});