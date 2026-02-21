import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from './layout'; // Assuming your Layout component is exported

jest.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter' }),
  'default': () => ({ className: 'inter' }),
}));

describe('Layout Component', () => {
  it('renders the layout with children', () => {
    const { container } = render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    );

    expect(container).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('renders the html tag with correct attributes', () => {
    render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    );
    const htmlTag = document.querySelector('html');
    expect(htmlTag).toHaveAttribute('lang', 'en');
  });

  it('renders the body with correct attributes', () => {
    render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    );
    const bodyTag = document.querySelector('body');
    expect(bodyTag).toBeInTheDocument();
  });


  it('renders the children within the layout', () => {
      render(
          <Layout>
              <p>Test Child</p>
          </Layout>
      );
      expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('should have a meta tag with the correct charset', () => {
      render(
          <Layout>
              <p>Test Child</p>
          </Layout>
      );
      const metaTag = document.querySelector('meta[charset="utf-8"]');
      expect(metaTag).toBeInTheDocument();
  });

  it('should have a viewport meta tag', () => {
      render(
          <Layout>
              <p>Test Child</p>
          </Layout>
      );
      const metaTag = document.querySelector('meta[name="viewport"]');
      expect(metaTag).toHaveAttribute('content', 'width=device-width, initial-scale=1');
  });

  it('renders the inter font class', () => {
    render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    );
    const htmlTag = document.querySelector('html');
    expect(htmlTag).toHaveClass('inter');
  });
});