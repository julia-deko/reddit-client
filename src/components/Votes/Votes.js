import React, { useState } from 'react';
import { TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick } from 'react-icons/ti';
import { Arrow } from './Arrow';
import { VotesContainer, VotesScore } from './VotesStyles';

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
    <VotesContainer>
      <Arrow 
        onClick={() => onHandleVote(1)} 
        icon={TiArrowUpOutline} 
        activeIcon={TiArrowUpThick} 
        active={voteValue === 1} 
      />
      <VotesScore>{score}</VotesScore>
      <Arrow 
        onClick={() => onHandleVote(-1)} 
        icon={TiArrowDownOutline} 
        activeIcon={TiArrowDownThick} 
        active={voteValue === -1} 
      />
    </VotesContainer>
  );
}
