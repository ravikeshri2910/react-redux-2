
import {legacy_createStore as createStore} from 'redux'

const contextReducer = (state = {counter : 0}, action) =>{
    if(action.type === 'increament'){
        return{
            counter : state.counter + 1
        }
    }
    if(action.type === 'decreament'){
        return{
            counter : state.counter - 1
        }
    }
    if(action.type === 'increament5'){
        return{
            counter : state.counter + 5
        }
    }
    if(action.type === 'decreament5'){
        return{
            counter : state.counter - 5
        }
    }

    return state
}

const store = createStore(contextReducer)

export default store


// const contextReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1
//     };
//   }

//   return state;
// };

// const store = createStore(contextReducer);

// export default store;
