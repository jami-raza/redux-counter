import React from 'react'
import {useSelector} from 'react-redux';

export default function CounterDisplay(){
    const {counter , isLoading} = useSelector((state)=>{
        return{
            counter: state.counter.count,
            isLoading: state.counter.isLoading
        }
    });
    if(isLoading) return<div>...Loading</div>
        
    return(
        <div>
        Counting: {counter}
        </div>
    )
    
}
