import React from 'react';
import { Icon, SubredditButton } from './SubredditStyles';

export function Subreddit({title, imageURL}) {
  return (
    <SubredditButton>
      <Icon src={imageURL} />
      {title}
    </SubredditButton>
  )
}
