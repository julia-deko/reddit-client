import { render, screen } from '@testing-library/react';
import { Subreddit } from '../Subreddit';

describe('Subreddit', () => {
  it('should render same text passed into title prop', () => {
    render(<Subreddit title={'Title'} imageURL={'https://example.com/image.jpg'} />);
    const title = screen.getByText(/Title/i);
    expect(title).toBeInTheDocument();
  });

  it('should render image passed into imageURL prop', () => {
    render(<Subreddit title={'Title'} imageURL={'https://example.com/image.jpg'} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('should render image passed into imageURL prop', () => {
    render(<Subreddit title={'Title'} imageURL={'https://example.com/image.jpg'} />);
    const image = screen.getByRole('img');
    expect(image).toBeVisible();
  });

  it('image should have src = https://example.com/image.jpg', () => {
    render(<Subreddit title={'Title'} imageURL={'https://example.com/image.jpg'} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
