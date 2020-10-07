import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './assets/CounterReducer';
const Store = configureStore({
    reducer:{
        counter: CounterReducer,
    }
});

export default Store;