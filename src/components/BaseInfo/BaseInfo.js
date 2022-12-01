import React from 'react';

export function BaseInfo({ title, imageURL }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {imageURL ? <img src={imageURL} /> : ''}
      </div>
    </div>
  )
}
