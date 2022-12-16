import React from 'react';
import { Title, Image, ImageContainer } from './BaseInfoStyles';

export function BaseInfo({ title, imageURL }) {
  return (
    <div>
      <div>
        <Title>{title}</Title>
      </div>
      <ImageContainer>
        {imageURL ? <Image src={imageURL} /> : ''}
      </ImageContainer>
    </div>
  )
}
