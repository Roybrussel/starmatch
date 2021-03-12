import React from 'react';

import PlayNumber from '../PlayNumber/PlayNumber';

const NumberDisplay = props => {

    const numberStatus = (number) => {
        if (!props.availableNums.includes(number)) {
            return 'used';
        }
        if (props.candidateNums.includes(number)) {
            return props.candidatesAreWrong ? 'wrong': 'candidate';
        }
        return 'available';
    };
        
    const onNumberClick = (number, currentStatus) => {
        if (props.gameStatus !== 'active' || currentStatus === 'used') {
            return;
        } 
        const newCandidateNums = 
            currentStatus === 'available'
            ? props.candidateNums.concat(number)
            : props.candidateNums.filter(cn => cn !== number);
        
        props.candidateNums.concat(number);
        if (props.sum(newCandidateNums) !== props.stars) {
            props.setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = props.availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            props.setStars(props.randomSumIn(newAvailableNums, 9));
            props.setAvailableNums(newAvailableNums);
            props.setCandidateNums([]);
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
                    color={props.color}
                /> )}
    </div>
    )}
    
export default NumberDisplay;