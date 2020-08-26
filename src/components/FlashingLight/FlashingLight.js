import React from "react";
import PropTypes from "prop-types";

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
