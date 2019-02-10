console.clear();

const { createStore, combineReducers } = Redux;

// PEople dropping off forms (Action Creators)
const createClaim = (name, amountOfMoneyToCollect)=>{
  return { //This is the form
      type: 'CREATE_CLAIM',
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
      }
  };
}

const createPolicy = (name)=>{
  return{
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: 20
    }
  };
};

const deletePolicy = (name)=>{
  return{
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
}

// Department (Reducers)

const claimsHistory = (oldClaims = [], action)=>{
  if(action.type === 'CREATE_CLAIM'){
    return [...oldClaims, action.payload];
  }
  return oldClaims;
}

const accounting = (bagOfMoney = 100, action)=>{
  if(action.type ==='CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if(action.type === "CREATE_POLICY"){
    return bagOfMoney + action.payload.amount
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action)=>{
  if(action.type ==='CREATE_POLICY'){
    return[...listOfPolicies, action.payload.name]
  } else if (action.type ==='DELETE_POLICY'){
    return listOfPolicies.filter(policy => policy != action.payload.name)
  }
  return listOfPolicies;
};

// Company Set UP

const departments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
 });

const store = createStore(departments)

store.dispatch(createPolicy('Alex'));
store.dispatch(createClaim('Alex', 100))
store.dispatch(deletePolicy('Alex'));

store.dispatch(createPolicy('Alex'));
store.dispatch(createClaim('Alex', 100))
store.dispatch(deletePolicy('Alex'));
store.dispatch(createPolicy('Alex'));
store.dispatch(createClaim('Alex', 100))
store.dispatch(deletePolicy('Alex'));

console.log(store.getState());
