import { render, screen } from '@testing-library/react';
import { Votes } from '../Votes';

describe('Votes', () => {
  it('should render score passed into score prop', () => {
    render(<Votes score={265} />);
    const score = screen.getByText(/265/i);
    expect(score).toBeInTheDocument();
  });
});
