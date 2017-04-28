// Load in our dependencies react and react-dom are required.

/* Here is our syntax sugar to load files instead of using require() method
This does not work in the browser and because this is client code we need a transpiler
to turn this into plain old javascript */
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
      // STEP 01 -- how do we call our Parent construtor

        // STEP 02 -- set up component state


        // Come back here after completeing Steps 6, 7
        // LASTLY: We need something here in order to access our functions.


    }
  //***********************************************************//
  //**  Come back here to complete these after Step 5 below  **//
  //***********************************************************//
  // Start button handler
  handleStart() {
    this.mytimer = setInterval(() => {
      this.setState({ elapsed: this.state.elapsed + 1 });
    }, 10);
  }


  // STEP 06 -- Stop button handlercompleteing





  // STEP 07 Reset button handler




  // STEP 03 -- Make our buttons work.
  render() {
    let seconds = (this.state.elapsed / 100).toFixed(1);

    return (
      <div className="app container">
        <div className="row">
          <div className="col s12">
            <div className="card purple z-depth-5">
              <div className="card-content white-text">
                <span className="card-title">{this.props.yourName}'s Stop Watch</span>
                <div className="counter">
                  <h2>Seconds</h2>

                  {/* STEP 04 -- Display running time */}
                  {/*  what do we need here   */}

                </div>
              </div>
              <div className="card-action">
                <div className="buttons">

                  {/* Step 05 add onClick events for our buttons THEN go back above and create the handlers in steps 6,7, & 8 */}

                  <button className="waves-effect waves-light btn" type="text" name="starttime" >Start</button>
                  <button className="waves-effect waves-light btn" type="text" name="stoptime" >Stop</button>
                  <button className="waves-effect waves-light btn" type="text" name="resettime" >Reset</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
