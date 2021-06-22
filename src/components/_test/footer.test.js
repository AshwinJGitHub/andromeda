import React from 'react'
import { render, screen } from '@testing-library/react';
import Footer from "../footer";

describe('Footer test', () => {

  beforeEach(() => {
    render(<Footer />);
  });

  it('renders footer text - Copyright', () => {
    const linkElement = screen.getByRole('region', { name: "footer"});
    expect(linkElement).toHaveTextContent('Copyright © Auto Galaxy2021.');
  });

});

