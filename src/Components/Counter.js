import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {decrement,fetchRandomNumber,increment,incrementbyamount} from '../assets/CounterReducer'
function Counter(){
    const [value, setValue] = useState(0);
    const dispath = useDispatch();
    
    return(
        <div>
            
            <button onClick={()=> dispath(increment())}>Increament</button>
            <button onClick={()=>dispath(decrement())}>Decreament</button>
            <input type="number" onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <br/>
            <button onClick={()=>dispath(incrementbyamount(Number(value)))}>Increment by amount</button>
            <button onClick={()=>dispath(fetchRandomNumber())}>Add random number</button>
        </div>
    )
};
export default Counter;