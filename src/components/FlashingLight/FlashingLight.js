import React, { Component } from "react";

class FlashingLight extends React.Component {
      
    render() {
    	return(
            <React.Fragment>
                <div className={`light ${this.props.active ? 'active' : ''}`}/>
            </React.Fragment>
        );
    }
};

export default FlashingLight;
