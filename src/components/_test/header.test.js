import React from 'react'
import { render, screen } from '@testing-library/react';
import Header from '../header'

describe('Header test', () => {
  let hdr;

  beforeEach(() => {
    hdr = render(<Header />);
  });

  it('renders header text', () => {
    const linkElement = screen.getByText('Auto Galaxy');
    expect(linkElement).toBeInTheDocument();
  });

  it('verify image exists', () => {
    const linkElement = screen.getByAltText('Logo of galaxy surrounding a car');
    expect(linkElement).toBeInTheDocument();
  });


});

