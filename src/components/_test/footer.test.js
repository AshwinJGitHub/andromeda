import React from 'react'
import { render, screen } from '@testing-library/react';
import FooterComp from "../footerComp";

describe('Footer test', () => {
  let hdr;

  beforeEach(() => {
    hdr = render(<FooterComp />);
  });

  it('renders footer text', () => {
    const linkElement = screen.getByText('Copyright © Auto Galaxy 2021');
    expect(linkElement).toBeInTheDocument();
  });

});

