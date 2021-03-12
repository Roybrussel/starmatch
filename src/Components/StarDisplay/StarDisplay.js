import React from 'react';

import Star from '../Star/Star';
import PlayAgain from '../PlayAgain/PlayAgain';

const StarDisplay = props => (
    <div className="left">
              {props.gameStatus !== 'active' ? (
                <PlayAgain 
                  onClick={props.resetGame}
                  gameStatus={props.gameStatus} />
              ) : (
                props.range(1, props.stars).map(starId => 
                <Star key={starId} />)
            )}
  </div>
)

export default StarDisplay;