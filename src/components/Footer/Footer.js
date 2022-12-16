import React from 'react';
import moment from 'moment';
import { TiMessage } from 'react-icons/ti';
import { FooterWrapper, Author, Comments } from './FooterStyles';

export function Footer({ author, time, commentsAmount }) {
  return (
    <FooterWrapper>
      <Author>{author}</Author>
      <span>{moment.unix(time).fromNow()}</span>
      <Comments>
        <TiMessage />
        {commentsAmount}
      </Comments>
    </FooterWrapper>
  );
}
