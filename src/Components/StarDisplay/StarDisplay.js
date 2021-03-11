import React from 'react';

import Star from '../Star/Star';

const StarDisplay = props => (
    <div className="left">
    {props.range(1, props.stars).map(starId => 
    <Star key={starId} />)}
  </div>
)

export default StarDisplay;