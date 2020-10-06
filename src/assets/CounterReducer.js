import {createReducer} from '@reduxjs/toolkit';
import {incrementAction,decrementAction} from './Actions';


  
 const CounterReducer = createReducer(0 ,{
    
       [incrementAction] : (state) => state +=1,
       [decrementAction] : (state) => state -=1,
     
  
 })
export default CounterReducer;