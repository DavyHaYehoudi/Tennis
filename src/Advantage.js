import React from 'react';
import { useSelector } from 'react-redux';

const Advantage = () => {

    const score1 = useSelector(state=>state.player1);
    const score2 = useSelector(state=>state.player2);
    const advantage = useSelector(state=>state.advantage);

    return (
        <div className='avantage'>
            <ul>
                <li>Player 1 </li>
                {advantage==='player1' ?
                <li>Avantage {score1} </li>
                :
                <li>{score1} </li>
                }
            </ul>
            <ul>
            <li>Player 2 </li>
                {advantage==='player2' ?
                <li>Avantage {score2} </li>
                :
                <li>{score2} </li>
                }
            </ul>
        </div>
    );
};

export default Advantage;