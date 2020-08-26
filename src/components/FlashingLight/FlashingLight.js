import React from "react";
import PropTypes from "prop-types";

// Flashing Light is a simple component to either be lit or not, it is coupled with its CSS component page to give it its animation.

const propTypes = {
	active: PropTypes.bool,
};

class FlashingLight extends React.Component {
      
    render() {
    	return(
            <React.Fragment>
                <div className={`light ${this.props.active ? "active" : ""}`}/>
            </React.Fragment>
        );
    }
};

FlashingLight.propTypes = propTypes;
export default FlashingLight;
