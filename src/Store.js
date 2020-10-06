import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './assets/CounterReducer';
const Store = configureStore({
    reducer:{
        counters: CounterReducer,
    }
});

export default Store;