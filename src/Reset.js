import React from 'react';
import { useDispatch } from "react-redux";
import { restartGame } from "./store"

const Reset = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={()=> dispatch(restartGame())}>Recommencer</button>
    );
};

export default Reset;