import React from 'react';
import moment from 'moment';
import { CommentWrapper, Metadata, Author, Time } from './CommentStyles';

export function Comment({ author, text, time }) {
  return (
    <CommentWrapper>
      <Metadata>
        <Author>{author}</Author>
        <Time>{moment.unix(time).fromNow()}</Time>
      </Metadata>
      <p>{text}</p>
    </CommentWrapper>
  );
}
