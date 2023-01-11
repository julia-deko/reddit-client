import { Subreddit } from '../Subreddit/Subreddit';
import { Title } from './SubredditsListStyles';

export function SubredditsList({subreddits}) {
  return (
    <div>
      <Title>Subreddits</Title>
      <div>
        {subreddits.map(subreddit => {
          return <Subreddit key={subreddit.id} title={subreddit.display_name} imageURL={subreddit.icon_img} />;
        })}
      </div>
    </div>
  );
}

