import React, { useState } from 'react';

import StarDisplay from '../StarDisplay/StarDisplay';
import NumberDisplay from '../NumberDisplay/NumberDisplay';

import './Starmatch.scss';

const Starmatch = () => {
  
        // Math science
        const utils = {
            // Sum an array
            sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
        
            // create an array of numbers between min and max (edges included)
            range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
        
            // pick a random number between min and max (edges included)
            random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
        
            // Given an array of numbers and a max...
            // Pick a random sum (< max) from the set of all available sums in arr
            randomSumIn: (arr, max) => {
            const sets = [[]];
            const sums = [];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = utils.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
                }
            }
            return sums[utils.random(0, sums.length - 1)];
            },
        };

        const [stars, setStars] = useState(utils.random(1,9));

        return (
            <div className="game">
            <div className="help">
              Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <StarDisplay 
                    stars={stars}
                    range={utils.range}
                />
                <NumberDisplay
                    stars={stars}
                    range={utils.range}
                    sum={utils.sum}
                />
            </div>
            <div className="timer">Time Remaining: 10</div>
          </div>
        )
    }

    export default Starmatch;