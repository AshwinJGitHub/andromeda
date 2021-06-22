import React from 'react'
import { getByRole, render, screen } from '@testing-library/react';
import Header from '../header'

describe('Header test', () => {
  // let hdr;

  beforeEach(() => {
    render(<Header />);
  });

  it('renders header text', () => {
    const linkElement = screen.getByRole('region', { name: "header"});
    expect(linkElement).toHaveTextContent('Auto Galaxy');
  });

  it('verify image exists', () => {
    const linkElement = screen.getByRole('region', { name: "header"});
    expect(getByRole(linkElement, 'img', { name: "logo"})).toBeInTheDocument();
  });
});

