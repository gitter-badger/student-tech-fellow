import React, { Component } from 'react';

import { Header } from './Header';
import { Content } from './Content';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            pageName: "Home Page",
            childLocked: false,
            childComponentMounted: false
        };
    }
    // User Defined Functions --------------------------------------------------
    onChangePageName(newName) {
      if (this.state.childLocked === false) {
        this.setState({pageName: newName});
      }
    }

    onChangeChildMounted() {
        this.setState({
            childComponentMounted: !this.state.childComponentMounted,
            childLocked: false
        });
    }
    onChangeLockStatus(){
      console.log("App Changes status");
      this.setState({ childLocked: true });
    }

    // End User Defined Functions ----------------------------------------------


    render() {
        console.log("App Render fired!");

        let edit = (this.state.childLocked) ? "Nope" : "Sure";
        let shade = (edit === "Nope") ? { backgroundColor: "red" } : { backgroundColor: "#92E0A9" };
        let contentComponent = "";

        if (this.state.childComponentMounted) {
            let style = { border: "2px dashed black", margin: "0 20px" };
            contentComponent = (
              <div className="row" style={style}>
                <Content
                    name={"Justin"}
                    initialAge={32}
                    initialPageName={this.state.pageName}
                    changePage={this.onChangePageName.bind(this)}
                    lockThis={this.state.childLocked}
                    changeLockStatus={this.onChangeLockStatus.bind(this)}
                />
                <span className="center-align" style={shade}>Can Edit? {edit}</span>
              </div>
            );
        }
        return (
            <div>
              <h6>Component 1 -- App</h6>
                <Header pageName={this.state.pageName}/>

                <div className="container">
                  {contentComponent}
                </div>

               <div className="container">
                  <div className="row">
                      <div className="center-align">
                          <button
                            className="btn"
                            style={{margin: "20px"}}
                            onClick={this.onChangeChildMounted.bind(this)}
                          >(Un)Mount Component
                          </button>
                      </div>
                  </div>
              </div>

            </div>
        );
    }
}
