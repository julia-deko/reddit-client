import React from 'react';
import moment from 'moment';

export function Comment({ author, text, time }) {
  return (
    <div>
      <div>
        <p>{author}</p>
        <p>{moment.unix(time).fromNow()}</p>
      </div>
      <p>{text}</p>
    </div>
  );
}
