import React from 'react'
import { render, screen } from '@testing-library/react';
import HeaderComp from '../headerComp'

describe('Header test', () => {
  let hdr;

  beforeEach(() => {
    hdr = render(<HeaderComp />);
  });

  it('renders header text', () => {
    const linkElement = screen.getByText('Auto Galaxy');
    expect(linkElement).toBeInTheDocument();
  });

  it('verify image exists', () => {
    const linkElement = screen.getByAltText('logoooo');
    expect(linkElement).toBeInTheDocument();
  });
  
});

