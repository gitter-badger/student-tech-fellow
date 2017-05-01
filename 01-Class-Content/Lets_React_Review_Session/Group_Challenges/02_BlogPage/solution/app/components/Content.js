import React, { Component } from 'react';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            pageName: props.initialPageName,
        };

        //UNCOMENT THIS TO DEMO "shouldComponentUpdate" Method
        // setTimeout(() => {
        //   this.onStatusChange()
        // }, 10 * 1000); // 10 Seconds
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
        console.log("Content Component will receive props", nextProps.lockThis);
        this.setState({ status: nextProps.lockThis });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Content Should Component update", nextProps, nextState);
        if (nextState.status === true) {
          console.log("no more updates!");
          return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Content Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Content Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Content Component will unmount");
    }
    //========= END LIFECYCLE METHODS ==========================================


    // ===== USER DEFINED FUNCTIONS ============================================
    onStatusChange() {
        console.log("Content called status change of App");
        this.props.changeLockStatus();
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangePage() {
        this.props.changePage(this.state.pageName);
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
                        <button onClick={() => this.onMakeOlder()} className="btn btn-primary center-align">Get older!</button>
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
                        <button onClick={() => this.onChangePage()} className="btn btn-primary">Change It!</button>
                      </div>
                    </div>
                  </div>

              </div>
        );
    }
}
