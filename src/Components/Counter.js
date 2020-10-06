import React from 'react';
import {decrementAction,incrementAction} from '../assets/Actions';
import {useDispatch} from 'react-redux'
function Counter(){
    const dispath = useDispatch();
    
    return(
        <div>
            
            <button onClick={()=> dispath(incrementAction())}>Increament</button>
            <button onClick={()=>dispath(decrementAction())}>Decreament</button>
        </div>
    )
};
export default Counter;