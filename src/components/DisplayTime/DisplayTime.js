import React from "react";
import FlashingLight from "../FlashingLight";
import {Row, Col} from "react-bootstrap";
import PropTypes from "prop-types";

const propTypes = {
	lightStage: PropTypes.number,
};

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

                <Row>
                    <Col>
                        <div className="light-container">
                            {lights.map((light,index) => <FlashingLight key={`first-${index}`} active={this.state.lightStage === index}/> )}
                        </div>
                    </Col>
                    <Col>
                        <div>{this.state.date.toLocaleTimeString([],{ hour: "2-digit", minute: "2-digit" })} </div>
                    </Col>
                    <Col>
                        <div className="light-container">
                            {lights.map((light,index) => <FlashingLight key={`second-${index}`} active={this.state.lightStage === index}/> )}
                        </div>
                    </Col>
                </Row>


                </div> 
            </React.Fragment>
        );
    }
};

DisplayTime.propTypes = propTypes;
export default DisplayTime;
