import { render, screen } from '@testing-library/react';
import { Comment } from '../Comment';

describe('Comment', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('Sun Dec 04 2022 20:40:07 GMT+0100').getTime())
  });
    
  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render correct time', () => {
    render(<Comment author={'nickname'} text={'text of the comment'} time={1670171076} />);
    const time = screen.getByText(/3 hours ago/i);
    expect(time).toBeInTheDocument();
  });
      
  it('should render text passed into author prop', () => {
    render(<Comment author={'nickname'} text={'text of the comment'} time={1670171076} />);
    const author = screen.getByText(/nickname/i);
    expect(author).toBeInTheDocument();
  });
  
  it('should render text passed into text prop', () => {
    render(<Comment author={'nickname'} text={'text of the comment'} time={1670171076} />);
    const text = screen.getByText(/text of the comment/i);
    expect(text).toBeInTheDocument();
  });
});
