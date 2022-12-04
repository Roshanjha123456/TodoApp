const initialState = 3;

const CountReducers = (state=initialState,action) => {
    console.log(action,"=========+++++++++================",state)
    
switch (action.type) {
    case "INCREMENT": return state + 1;
    case "DECREMENT": return state-1;

    default: return state
}
}

export default CountReducers;