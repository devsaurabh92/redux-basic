import React, { Component } from 'react';
//import { createStore } from 'redux';
import { store } from "./store";
//import reducer from './reducers';
import HelloWorld from './components/HelloWorld';
import ButtonGroup from './components/ButtonGroup';

//const initialState = { tech: "React " };
//const store = createStore(reducer,initialState);  
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Application state:</h3>
        <div>{store.getState().tech} </div>
        <HelloWorld key={1} tech={store.getState().tech} />
        <ButtonGroup key={2} technologies={["React JS", "Angular JS", "React-redux","Node JS"]} />
      </div>
    );
  }
}

export default App;
