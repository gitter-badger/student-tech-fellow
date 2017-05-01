// Load in our dependencies react and react-dom are required.

/* Here is our syntax sugar to load files instead of using require() method
This does not work in the browser and because this is client code we need a transpiler
to turn this into plain old javascript */
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
        super(props);
        // set initial time:
        this.state = {
          elapsed: 0,
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.reset = this.reset.bind(this);
  }

  handleStart() {
    this.mytimer = setInterval(() => {
      this.setState({ elapsed: this.state.elapsed + 1 });
    }, 10);
  }

  handleStop() {
    clearInterval(this.mytimer);
  }

  reset() {
    this.setState({ elapsed: 0 })
  }

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
                  <p>{seconds}</p>
                </div>
              </div>
              <div className="card-action">
                <div className="buttons">
                  <button className="waves-effect waves-light btn" type="text" name="starttime" onClick={this.handleStart}>Start</button>
                  <button className="waves-effect waves-light btn" type="text" name="stoptime" onClick={this.handleStop}>Stop</button>
                  <button className="waves-effect waves-light btn" type="text" name="stoptime" onClick={this.reset}>Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
