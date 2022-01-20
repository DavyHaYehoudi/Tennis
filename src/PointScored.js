import React from 'react';
import { useDispatch } from "react-redux";
import { pointScored } from "./store";

const PointScored = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={()=>dispatch(pointScored('player1'))}>Point Player1</button>
            <button onClick={()=>dispatch(pointScored('player2'))}>Point Player2</button>
        </>
    );
};

export default PointScored;