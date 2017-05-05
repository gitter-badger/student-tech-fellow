// Load in our dependencies react and react-dom are required.

/* Here is our syntax sugar to load files instead of using require() method
This does not work in the browser and because this is client code we need a transpiler
to turn this into plain old javascript */
import React from 'react';
import ReactDOM from 'react-dom';

/* you may see demos import the render method directly. In this case you can
// use render() without the dot-notation.

 import { render } from 'react-dom'; */
import App from './App';
// Our app begins by setting the target of the app to the location on the DOM
// The render method takes two args. 1st is the Main react component and 2nd is
// the binding location on the dom
ReactDOM.render(<App yourName={"Justin"}/>, document.getElementById('app-root'));
