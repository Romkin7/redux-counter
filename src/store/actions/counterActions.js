import { INCREMENT, DECREMENT, STORE_RESULT ,DELETE_RESULT } from "../actionTypes";

export function incrementCounter(value) {
    console.log(" action 1")
    return dispatch => {
        dispatch({type: INCREMENT, value: value});
    }
}

export function decrementCounter(value) {
    console.log(" action 2")
    return dispatch => {
        dispatch({type: DECREMENT, value: value});
    }
}

export function storeCounter(score) {
    console.log(" action 3")
    return dispatch => {
        dispatch({ type: STORE_RESULT, value: score});
    }
}

export function deleteCounter(id) {
    console.log(" action "+id)
    return dispatch => {
        dispatch({type: DELETE_RESULT, value: id});
    }
}