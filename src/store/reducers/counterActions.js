import { INCREMENT, DECREMENT, STORE_RESULT, DELETE_RESULT } from "../actionTypes";

const DEFAULT_STATE = {
    count: 0,
    results: []
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case INCREMENT:
            return {...state, count: state.count + action.value};
        case DECREMENT:
            return {...state, count: state.count - action.value};
        case STORE_RESULT:
            return {...state, results: state.results.concat({id: Date.now(), value: state.count})};
        case DELETE_RESULT:
            console.log(action.value);
            return {...state, results: state.results.filter(result => result.id !== action.value)}
        default: 
            return state;
    }
};