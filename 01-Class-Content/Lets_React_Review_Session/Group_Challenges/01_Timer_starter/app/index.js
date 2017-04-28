// We Load in our dependencies "react" and "react-dom" are required.

/* We import files instead of using the require() method
This does not work in the natively browser. Because this is client code
we need a transpiler to turn this into plain old javascript */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// Our app begins by setting the target of the app to the target element on the DOM
// The render method takes two arguments.
// 1st is the Main react component and the 2nd is the binding to the element on the dom


// The App Component has a property which is a string for your name
ReactDOM.render(<App yourName={}/>, document.getElementById('app-root'));
