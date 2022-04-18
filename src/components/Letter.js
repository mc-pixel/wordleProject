import React, {useContext} from 'react';
import {AppContext} from "../App";

function Letter({letterPos, atemptVal}) {
    const{ board } = useContext(AppContext);
    const letter = board[atemptVal] [letterPos];
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter