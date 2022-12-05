import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('Sun Dec 04 2022 20:40:07 GMT+0100').getTime())
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render correct time', () => {
    render(<Footer author={'nickname'} time={1670171076} commentsAmount={55} />);
    const time = screen.getByText(/3 hours ago/i);
    expect(time).toBeInTheDocument();
  });

  it('should render an author name passed into prop', () => {
    render(<Footer author={'nickname'} time={1232850357} commentsAmount={55} />);
    const author = screen.getByText(/nickname/i);
    expect(author).toBeInTheDocument();
  });

  it('should render an amount of comments passed into prop', () => {
    render(<Footer author={'nickname'} time={1232850357} commentsAmount={55} />);
    const commentsAmount = screen.getByText(/55/i);
    expect(commentsAmount).toBeInTheDocument();
  });
}); 

