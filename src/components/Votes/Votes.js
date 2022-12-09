import React, { useState } from 'react';
import { TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick } from 'react-icons/ti';

export function Votes({ score }) {
  const [ voteValue, setVoteValue ] = useState('default');

  const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      setVoteValue(0);
    } else if (newValue === 1) {
      setVoteValue(1);
    } else {
      setVoteValue(-1);
    }
  };

  const renderUpVote = () => {
    if (voteValue === 1) {
      return <TiArrowUpThick />
    }
    return <TiArrowUpOutline />
  };

  const renderDownVote = () => {
    if (voteValue === -1) {
      return <TiArrowDownThick /> 
    }
    return <TiArrowDownOutline />
  };

  return (
    <div>
      <button onClick={() => onHandleVote(1)}>
        {renderUpVote()}
      </button>
      <p>{score}</p>
      <button onClick={() => onHandleVote(-1)}>
        {renderDownVote()}
      </button>
    </div>
  );
}
