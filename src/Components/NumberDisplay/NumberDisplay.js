import React, {useState} from 'react';

import PlayNumber from '../PlayNumber/PlayNumber';

const NumberDisplay = props => {

    // Color Theme
    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
        };

    const [availableNums, setAvailableNums] = useState([1, 2, 3, 4, 5]);
    const [candidateNums, setCandidateNums] = useState([2, 3]);

    const candidatesAreWrong = props.sum(candidateNums) > props.stars;

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong': 'candidate';
        }
        return 'available';
    };

    return (
    <div className="right">
    {props.range(1, 9).map(number => 
    <PlayNumber 
        key={number} 
        number={number} 
        status={numberStatus(number)}
        color={colors}
        /> )}
  </div>
    )
}

export default NumberDisplay;