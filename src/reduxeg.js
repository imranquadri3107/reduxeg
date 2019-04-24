const { createStore } = require('redux');


const initialState = {
    age:21
};

const myReducer = (state = initialState , action)=>{
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += 1
    }
    if(action.type === 'SUB'){
        newState.age -= 1
    } 
    return newState
}
const store = createStore(myReducer);
store.subscribe(()=> console.log('store changed'))


store.dispatch({type: 'ADD'})
store.dispatch({type: 'SUB'})
console.log(store.getState());
console.log(store.getState());
