import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, storeCounter, deleteCounter } from "../store/actions/counterActions";

class Counter extends Component{
    
    render() {
        const { incrementCounter, decrementCounter, storeCounter, deleteCounter, counter, results } = this.props;
        return(
            <main>
                <h1>Your score is: {counter.count}</h1>
                <button onClick={() => incrementCounter(1)}>Add one</button>
                <button onClick={() => incrementCounter(5)}>Add five</button>
                <button onClick={() => decrementCounter(1)}>Remove one</button>
                <button onClick={() => decrementCounter(5)}>Remove five</button>
                <button onClick={() => storeCounter(counter.count)}>LIsää listalle</button>
                <ul>
                    {results && results.length && results.map((result) => {
                        return(<li key={result.id}>result value: {result.value} <span onClick={() => deleteCounter(result.id)}>X</span></li>)
                    })}
                </ul>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterActions,
        results: state.counterActions.results

    }
}

export default connect(mapStateToProps, {incrementCounter, decrementCounter, storeCounter, deleteCounter})(Counter);