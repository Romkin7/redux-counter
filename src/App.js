import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { configureStore } from "./store/";
import Counter from "./containers/Counter";

const store = configureStore();

const App = () => {
  return(
    <Provider store={store}>
      <div className="App">
          <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
