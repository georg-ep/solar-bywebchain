import React from 'react';
import { render, screen } from '@testing-library/react';
import SolarLogo from './SolarLogo';

describe('SolarLogo Component', {
  retries: 2
}, () => {
  it('renders without crashing', () => {
    render(<SolarLogo />);
    expect(screen.getByAltText(/solar logo/i)).toBeInTheDocument();
  });

  it('renders the correct SVG elements', () => {
    render(<SolarLogo />);
    const svgElement = screen.getByRole('img', { name: /solar logo/i });
    expect(svgElement).toBeInTheDocument();
  });

  it('applies the correct styles to the SVG', () => {
    render(<SolarLogo />);
    const svgElement = screen.getByRole('img', { name: /solar logo/i });
    expect(svgElement).toHaveStyle('width: 100px');
    expect(svgElement).toHaveStyle('height: auto');
  });

  it('renders with custom width', () => {
    render(<SolarLogo width={50} />);
    const svgElement = screen.getByRole('img', { name: /solar logo/i });
    expect(svgElement).toHaveStyle('width: 50px');
  });

  it('renders with custom className', () => {
      render(<SolarLogo className="custom-class" />);
      const svgElement = screen.getByRole('img', { name: /solar logo/i });
      expect(svgElement).toHaveClass('custom-class');
  });
});