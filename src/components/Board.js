import React, { useState } from 'react';
import { boardDefault } from '../Words';
import Letter from './Letter';

function Board() {
  return (
    <div className='board'>
        {" "}
        <div className='row'>
            <Letter letterPos={0} atemptVal={0}/> 
            <Letter letterPos={1} atemptVal={0}/> 
            <Letter letterPos={2} atemptVal={0}/> 
            <Letter letterPos={3} atemptVal={0}/> 
            <Letter letterPos={4} atemptVal={0}/> 
            </div>
        <div className='row'>
            <Letter letterPos={0} atemptVal={1}/> 
            <Letter letterPos={1} atemptVal={1}/> 
            <Letter letterPos={2} atemptVal={1}/> 
            <Letter letterPos={3} atemptVal={1}/> 
            <Letter letterPos={4} atemptVal={1}/>  
            </div>
        <div className='row'>
            <Letter letterPos={0} atemptVal={2}/> 
            <Letter letterPos={1} atemptVal={2}/> 
            <Letter letterPos={2} atemptVal={2}/> 
            <Letter letterPos={3} atemptVal={2}/> 
            <Letter letterPos={4} atemptVal={2}/>  
             </div>
        <div className='row'>
            <Letter letterPos={0} atemptVal={3}/> 
            <Letter letterPos={1} atemptVal={3}/> 
            <Letter letterPos={2} atemptVal={3}/> 
            <Letter letterPos={3} atemptVal={3}/> 
            <Letter letterPos={4} atemptVal={3}/>  
             </div>
        <div className='row'>
            <Letter letterPos={0} atemptVal={4}/> 
            <Letter letterPos={1} atemptVal={4}/> 
            <Letter letterPos={2} atemptVal={4}/> 
            <Letter letterPos={3} atemptVal={4}/> 
            <Letter letterPos={4} atemptVal={4}/>  
             </div>
    
    </div>
  )
}

export default Board