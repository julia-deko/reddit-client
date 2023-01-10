import { Subreddit } from '../Subreddit/Subreddit';

export function SubredditsList({subreddits}) {
  return (
    <div>
      <h2>Subreddits</h2>
      <div>
        {subreddits.map(subreddit => {
          return <Subreddit key={subreddit.id} title={subreddit.display_name} imageURL={subreddit.icon_img} />;
        })}
      </div>
    </div>
  );
}

