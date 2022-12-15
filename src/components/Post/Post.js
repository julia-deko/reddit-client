import { Votes } from '../Votes/Votes';
import { BaseInfo } from '../BaseInfo/BaseInfo';
import { Footer } from '../Footer/Footer';

export function Post({score, title, imageURL, author, time, commentsAmount }) {
  return (
    <div>
      <Votes score={score} />
      <BaseInfo title={title} imageURL={imageURL} />
      <Footer author={author} time={time} commentsAmount={commentsAmount} />
    </div>
  );
}
