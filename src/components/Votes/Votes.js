import React, { useState } from 'react';
import { TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick } from 'react-icons/ti';
import { Arrow } from './Arrow';

export function Votes({ score }) {
  const [ voteValue, setVoteValue ] = useState(0);

  const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      setVoteValue(0);
    } else {
      setVoteValue(newValue);
    }
  };

  return (
    <div>
      <Arrow 
        onClick={() => onHandleVote(1)} 
        icon={TiArrowUpOutline} 
        activeIcon={TiArrowUpThick} 
        active={voteValue === 1} 
      />
      <p>{score}</p>
      <Arrow 
        onClick={() => onHandleVote(-1)} 
        icon={TiArrowDownOutline} 
        activeIcon={TiArrowDownThick} 
        active={voteValue === -1} 
      />
    </div>
  );
}
