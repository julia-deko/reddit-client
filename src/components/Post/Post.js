import { Votes } from '../Votes/Votes';
import { BaseInfo } from '../BaseInfo/BaseInfo';
import { Footer } from '../Footer/Footer';
import { PostWrapper } from './PostStyles';

export function Post({score, title, imageURL, author, time, commentsAmount }) {
  return (
    <PostWrapper>
      <Votes score={score} />
      <div>
        <BaseInfo title={title} imageURL={imageURL} />
        <Footer author={author} time={time} commentsAmount={commentsAmount} />
      </div>
    </PostWrapper>
  );
}
