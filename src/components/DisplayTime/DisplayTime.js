import React, { Component } from "react";
import FlashingLight from "../FlashingLight";
import {Row, Col} from "react-bootstrap";
class DisplayTime extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            lightStage:0
         };

    }
    
    tick() {
        this.setState({ date: new Date() });

        console.log(this.state.lightStage);
        if (this.state.lightStage < 2){
            this.setState((prevState, props) => ({
                lightStage: this.state.lightStage + 1,
            })); 
        }
        else{
            this.setState((prevState, props) => ({
                lightStage: 0,
            }));	
        }
    }
        
    componentDidMount() {
		this.interval = setInterval(this.tick.bind(this), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
      
    render() {
        const lights = Array.from(Array(3).keys());

    	return(
            <React.Fragment>
                <div className="display-time">

                <Row >
						<Col className="light-container col-2" >{lights.map((light,index) => <FlashingLight key={`first-${index}`} active={this.state.lightStage === index}/> )}</Col>
						<Col><div>{this.state.date.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' })} </div></Col>
						<Col className="light-container col-2" >{lights.map((light,index) => <FlashingLight key={`second-${index}`} active={this.state.lightStage === index}/> )}</Col>
                </Row>


                </div> 
            </React.Fragment>
        );
    }
};

export default DisplayTime;
