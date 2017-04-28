import React, { Component } from 'react';

import { Header } from './Header';
import { Content } from './Content';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
//----- STEP 01 -- Add the following properties: "pageName", "childLocked", and "childComponentMounted"



        };
    }
    /* User Defined Functions ++++++++++++++++++++++++++++++++++++++++++++++++*/
    onChangePageName(newName) {
//----- STEP 02 -- What can we check on state to prevent updates to Header page name?
      if (/*  fill in here  */ === false) {
        this.setState({pageName: newName});
      }
    }

    onChangeChildMounted() {
        this.setState({
//----- STEP 04 Add a toogle using js.------------------------------------------
            childComponentMounted: /* add code here */,
            childLocked: false
        });
    }
    onChangeLockStatus(){
      console.log("App Changes status");
//------- STEP 05 -- Update the status of the state to prevent changes on the child

    }

    /* End User Defined Functions ++++++++++++++++++++++++++++++++++++++++++++*/


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
//----- STEP 06 -- Add values to props for the child component------------------
                    name={/* Add code */}
                    initialAge={/* Add code */}
                    initialPageName={/* Add code */}
                    changePage={/* Add code */}
                    lockThis={/* Add code */}
                    changeLockStatus={/* Add code */}
                />
                <span className="center-align" style={shade}>Can Edit? {edit}</span>
              </div>
            );
        }

//----- STEP 07 -- Fill in the missing code-------------------------------------
        return (
            <div>
              <h6>Component 1 -- App</h6>
                <Header pageName={/* Add code */}/>

                <div className="container">
                  {contentComponent}
                </div>

               <div className="container">
                  <div className="row">
                      <div className="center-align">
                          <button
                            className="btn"
                            style={{margin: "20px"}}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>
                            onClick={/* Add code */}
                          >(Un)Mount Component
                          </button>
                      </div>
                  </div>
              </div>

            </div>
        );
    }
}
