import React from 'react'
import {useSelector} from 'react-redux';

export default function CounterDisplay(){
    const counter = useSelector((state)=>state.counters);
        
    return(
        <>
        Counting: {counter}
        </>
    )
    
}
