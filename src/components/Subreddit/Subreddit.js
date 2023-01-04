import React from 'react';

export function Subreddit({title, imageURL}) {
  return (
    <button>
      <img src={imageURL} />
      {title}
    </button>
  )
}
