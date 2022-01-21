import React from 'react';
import { useDispatch } from "react-redux";
import { restartGame } from "./store"

const Reset = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={()=> dispatch(restartGame())}>Nouveau jeu</button>
    );
};

export default Reset;