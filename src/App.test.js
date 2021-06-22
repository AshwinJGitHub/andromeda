import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test Suite', () => {
  let app;

  beforeEach(() => {
    app = render(<App />);
  });

  it('renders header component', () => {
    const linkElement = screen.getByTestId('appHeader');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders vehicles component', () => {
    const linkElement = screen.getByTestId('appVehicles');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders footer component', () => {
    const linkElement = screen.getByTestId('appFooter');
    expect(linkElement).toBeInTheDocument();
  });

});

