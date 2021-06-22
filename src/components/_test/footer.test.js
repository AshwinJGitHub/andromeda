import React from 'react'
import { render, screen } from '@testing-library/react';
import Footer from "../footer";

describe('Footer test', () => {
  let hdr;

  beforeEach(() => {
    hdr = render(<Footer />);
  });

  it('renders footer text', () => {
    const linkElement = screen.getByText('Copyright © Auto Galaxy 2021.');
    expect(linkElement).toBeInTheDocument();
  });

});

