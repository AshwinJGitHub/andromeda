import React from 'react'
import { render, screen } from '@testing-library/react';
import HeaderComp from '../headerComp'

describe('Header test', () => {
  let hdr;

  beforeEach(() => {
    hdr = render(<HeaderComp />);
  });

  it('renders header text', () => {
    console.log(screen);
    const linkElement = screen.getByText('Josh\'s Cat Cars');
    expect(linkElement).toBeInTheDocument();
  });
  
});

