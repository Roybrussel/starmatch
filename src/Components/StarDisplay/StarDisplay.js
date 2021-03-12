import React from 'react';

import Star from '../Star/Star';
import PlayAgain from '../PlayAgain/PlayAgain';

const StarDisplay = props => (
    <div className="left">
              {props.gameIsDone
            ? <PlayAgain 
                onClick={props.resetGame}
            />
            :props.range(1, props.stars).map(starId => 
    <Star key={starId} />)}
  </div>
)

export default StarDisplay;