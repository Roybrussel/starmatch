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

    const [availableNums, setAvailableNums] = useState(props.range(1,9));
    const [candidateNums, setCandidateNums] = useState([]);

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
        
    const onNumberClick = (number, currentStatus) => {
        if (currentStatus === 'used') {
            return;
        } 
        const newCandidateNums = candidateNums.concat(number);
        if (props.sum(newCandidateNums) !== props.stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            props.setStars(props.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return (
    <div className="right">
    {props.range(1, 9).map(number => 
    <PlayNumber 
        key={number} 
        number={number} 
        status={numberStatus(number)}
        onClick={onNumberClick}
        color={colors}
        /> )}
  </div>
    )
}

export default NumberDisplay;