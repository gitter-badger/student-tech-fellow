import React from 'react';

export const Header = (props) => {
    let style = {
      textAlign: "center",
      fontSize: "2em"
    };
    return (
        <div className="row">
            <div className="col s12">
                <div className="card deep-purple darker-3">
                  <div className="card-content">
                      <span>Component 2 -- Header</span>
                      <span className="card-title" style={style}>{props.pageName}</span>
                  </div>
                </div>
            </div>
        </div>
    );
};
