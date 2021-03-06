import React, { useState, useEffect } from 'react';

import StarDisplay from '../StarDisplay/StarDisplay';
import NumberDisplay from '../NumberDisplay/NumberDisplay';

import './Game.scss';

const Game = props => {

    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
        };
  
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

        const [availableNums, setAvailableNums] = useState(utils.range(1,9));
        const [candidateNums, setCandidateNums] = useState([]);
        const [stars, setStars] = useState(utils.random(1,9));
        const [secondsLeft, setSecondsLeft] = useState(10);

        useEffect(() => {
            if (secondsLeft > 0 && availableNums.length > 0) {
               const timerId = setTimeout(() => {
                    setSecondsLeft(secondsLeft - 1);
                }, 1000);
                return () => clearTimeout(timerId);
            }
        })
    
        const candidatesAreWrong = utils.sum(candidateNums) > stars;
        const gameStatus = availableNums.length === 0
            ? 'won'
            : secondsLeft === 0 ? 'lost' : 'active'

        return (
            <div className="game">
            <div className="help">
              Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <StarDisplay 
                    stars={stars}
                    range={utils.range}
                    gameStatus={gameStatus}
                    startNewGame={props.startNewGame}
                    color={colors}
                />
                <NumberDisplay
                    stars={stars}
                    setStars={setStars}
                    range={utils.range}
                    sum={utils.sum}
                    color={colors}
                    gameStatus={gameStatus}
                    randomSumIn={utils.randomSumIn}
                    candidatesAreWrong={candidatesAreWrong}
                    availableNums={availableNums}
                    setAvailableNums={setAvailableNums}
                    candidateNums={candidateNums}
                    setCandidateNums={setCandidateNums}
                    
                />
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
          </div>
        )
    }

    export default Game;