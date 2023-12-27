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

const initialAuth = {
    isAuthenticatin : false
}

const authSlice = createSlice({
    name:'authentication',
    initialState : initialAuth,
    reducers :{
        logIn(state){
            state.isAuthenticatin = true
        },
        logOut(state){
            state.isAuthenticatin = true
        }
    }
})

const store = configureStore({
    reducer:  {counter : counterSlice.reducer , auth : authSlice.reducer}
   
});

export const counterActions = counterSlice.actions;
export const counterAuth = authSlice.actions;
export default store;


