import React from 'react';
import { render, screen } from '@testing-library/react';
import SolarMark from './SolarMark';

describe('SolarMark Component', {
    timeout: 10000,
  }, () => {
  it('renders without crashing', () => {
    render(<SolarMark />);
    const element = screen.getByTestId('solar-mark');
    expect(element).toBeInTheDocument();
  });

  it('renders the SVG with correct attributes', () => {
    render(<SolarMark />);
    const svgElement = screen.getByTestId('solar-mark-svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '100%');
    expect(svgElement).toHaveAttribute('height', '100%');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 40 40');
  });

  it('renders the circle with correct attributes', () => {
    render(<SolarMark />);
    const circleElement = screen.getByTestId('solar-mark-circle');
    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toHaveAttribute('cx', '20');
    expect(circleElement).toHaveAttribute('cy', '20');
    expect(circleElement).toHaveAttribute('r', '19');
    expect(circleElement).toHaveAttribute('fill', 'none');
    expect(circleElement).toHaveAttribute('stroke', '#fff');
    expect(circleElement).toHaveAttribute('strokeWidth', '2');
  });

  it('renders the paths with correct attributes', () => {
    render(<SolarMark />);
    const path1 = screen.getByTestId('solar-mark-path-1');
    expect(path1).toBeInTheDocument();
    expect(path1).toHaveAttribute('d');
    expect(path1).toHaveAttribute('stroke', '#fff');
    expect(path1).toHaveAttribute('strokeWidth', '2');
    expect(path1).toHaveAttribute('strokeLinecap', 'round');
    expect(path1).toHaveAttribute('strokeLinejoin', 'round');

    const path2 = screen.getByTestId('solar-mark-path-2');
    expect(path2).toBeInTheDocument();
    expect(path2).toHaveAttribute('d');
    expect(path2).toHaveAttribute('stroke', '#fff');
    expect(path2).toHaveAttribute('strokeWidth', '2');
    expect(path2).toHaveAttribute('strokeLinecap', 'round');
    expect(path2).toHaveAttribute('strokeLinejoin', 'round');
  });
});