import React from 'react'
import { render, screen } from '@testing-library/react';
import HeaderComp from '../header'

describe('Header test', () => {
  // let hdr;

  beforeEach(() => {
    const hdr = render(<HeaderComp />);
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

