import React, { Component } from 'react';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
//----- STEP 8 -- Refactor so that these state properties can receive values from props
            age: "",
            pageName: "",
        };

        setTimeout(() => {
          this.onStatusChange()
        }, 10 * 1000); // 10 Seconds
        console.log("Content Constructor fired!");
    }

  //==========================================================================
  //Lifecycle Methods=========================================================
  //==========================================================================
    componentWillMount() {
        console.log("Content Component will mount");
    }

    componentDidMount() {
        console.log("Content Component did mount!");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Content Component will receive props");
//----- STEP 9 -- What can we do to update things here when new values are passed in?
        // from the parent -- **hint** we have to set something

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Content Should Component update", nextProps, nextState);
//----- STEP 10 -- What can we test in order prevent view from changing?
        if ( /*----*/ ) {
          console.log("no more updates!");
          return false;
        }
        return true;
    }
    //========= END LIFECYCLE METHODS ==========================================


    // ===== USER DEFINED FUNCTIONS ============================================
    onStatusChange() {
        console.log("Content called status change of App");
//----- STEP 11 What can we use to let the parent know something here changed?
    }

    onMakeOlder() {
        this.setState({
//----- STEP 12 -- Increment the age
            age:
        });
    }

    onChangePage() {
//----- STEP 13 -- Pass the value of the pageName input back to the Header

    }

    onHandleInputChange(event) {
        this.setState({
            pageName: event.target.value
        });
    }
    //==========================================================================


    render() {
        console.log("Content Component Render fired!");

        return (
              <div>
                  <h5 className="center-align">Component 3 -- Content Area</h5>

                  <div className="col s6">
                    <div className="card z-depth-5">
                      <div className="card-content">
                        <p>Hi, {this.props.name}!</p>
                        <p>Your age is {this.state.age}. So old!</p>
{/* STEP 14 -------------------------------------------------------------------------- */}
                        {/* Add onClick event to use our function to increment the age */}
                        <button onClick={/* Add Code */} className="btn btn-primary center-align">Get older!</button>

                      </div>
                    </div>
                  </div>

                  <div className="col s6">
                    <div className="card z-depth-5">
                      <div className="card-content">
                        <label>Change Page Name</label>
                        <input id="changeName"
                               type="text"
                               placeholder="Type new name"
                               onChange={(event) => this.onHandleInputChange(event)} />
{/* STEP 15 --- and finaly ------------------------------------------ */}
                        {/* Add onClick event to fire our User Defined function change the page name */}
                        <button onClick={/* Add Code */} className="btn btn-primary">Change It!</button>

                      </div>
                    </div>
                  </div>

              </div>
        );
    }
}
