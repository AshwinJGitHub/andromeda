import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test Suite', () => {
  let app;

  beforeEach(() => {
    app = render(<App />);
  });

  it('renders header component by testID', () => {
    const linkElement = screen.getByTestId('appHeader');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders vehicles component by testID', () => {
    const linkElement = screen.getByTestId('appVehicles');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders footer component by testID', () => {
    const linkElement = screen.getByTestId('appFooter');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders header component by Role', () => {
    const linkElement = screen.getByRole('region', { name: 'header'});
    expect(linkElement).toBeInTheDocument();
  });
  it('renders vehicles component by Role', () => {
    const linkElement = screen.getByRole('region', { name: 'vehicles'});
    expect(linkElement).toBeInTheDocument();
  });
  it('renders footer component by Role', () => {
    const linkElement = screen.getByRole('region', { name: 'footer'});
    expect(linkElement).toBeInTheDocument();
  });

});

