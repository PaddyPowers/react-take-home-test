import React, { Component } from "react";

class Countdown extends React.Component{
	constructor(){
	  super();
	  this.state = {
		speed: 1,
		timer:1,
		initialTime:250,
	  }
	  this.frame = this.frame.bind(this);
	}


	
	  componentDidMount() {
		this.interval = setInterval(() => this.frame(), 1000);
	  }

	  frame() {
		if (this.state.timer < this.state.initialTime){
		  this.setState((prevState, props) => ({
			timer: this.state.timer + this.state.speed,
		  })); 
		}
		else{
			this.props.action();
			this.setState((prevState, props) => ({
				timer: 0,
			}));	
		}
	  }
	  componentWillUnmount() {
		clearInterval(this.interval);
	  }

	render(){
	  return (		
	  	<React.Fragment >
		<div className="countdown">
		<span>Refreshing in {this.state.initialTime - this.state.timer}s</span>
		<div className="progress-bar mt-1" style={{
			transition:this.state.timer === 0 ? '0s' : '1s linear',
			height:"20px",
			width: (this.state.timer / this.state.initialTime) * 100 + "%"
		  }}/>
		  </div>
		</React.Fragment>);
	}  
}


export default Countdown;
