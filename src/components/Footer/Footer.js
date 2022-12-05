import React from 'react';
import moment from 'moment';

export function Footer({ author, time, commentsAmount }) {
  return (
        <div>
            <span>{author}</span>
            <span>{moment.unix(time).fromNow()}</span>
            <span>
                <button>Comments</button>
                {commentsAmount}
            </span>
        </div>
  )
}
