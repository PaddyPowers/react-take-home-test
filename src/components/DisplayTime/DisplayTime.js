import React, { Component } from "react";

class DisplayTime extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    
    tick() {
        this.setState({ date: new Date() });
    }
        
    componentDidMount() {
		this.interval = setInterval(this.tick.bind(this), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
      
    render() {
    	return(
            <React.Fragment>
                <div className="display-time">
                    <div>{this.state.date.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' })} </div>
                </div> 
            </React.Fragment>
        );
    }
};

export default DisplayTime;
