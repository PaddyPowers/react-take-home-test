import React, { Component } from "react";

class Countdown extends React.Component{
	constructor(){
	  super();
	  this.state = {
		progress: 0,
		speed: 1,
	  }
	  this.frame = this.frame.bind(this);

	}
	  componentDidMount() {
		console.clear();
		this.interval = setInterval(() => this.frame(), 1000);
	  }

	  frame() {
		if (this.state.progress < 100){
		  this.setState((prevState, props) => ({
			progress: prevState.progress + this.state.speed,
		  })); 
		  console.log(this.state.progress);  
		}
		else{
			this.props.action();
			this.setState((prevState, props) => ({
				progress: 0,
			}));	
		}
	  }
	  componentWillUnmount() {
		clearInterval(this.interval);
	  }

	render(){
	  return (
		<div id="myBar" style={{
			height:'20px',
			background:"red",
			width: this.state.progress + "%"
		  }}>
		</div>);
	}  
}


export default Countdown;
