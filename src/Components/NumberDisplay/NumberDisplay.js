import React from 'react';

import PlayNumber from '../PlayNumber/PlayNumber';

const NumberDisplay = props => (
    <div className="right">
    {props.range(1, 9).map(number => 
    <PlayNumber key={number} number={number} /> )}
  </div>
)

export default NumberDisplay;