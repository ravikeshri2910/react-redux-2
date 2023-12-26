// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createSlice , configureStore } from '@reduxjs/toolkit'


const initialValue = {
    counter :0,
    showCounter :true
}


const counterSlice = createSlice({
    name: 'counter',
    initialState : initialValue,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy5(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrementBy5(state, action) {
            state.counter -= action.payload;
        },
        toggleEvent(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;


