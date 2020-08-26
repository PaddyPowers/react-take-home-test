import React, { Component } from "react";
import PropTypes from "prop-types";
import  DisplayTime  from "../DisplayTime";
import  Countdown  from "../Countdown";
import {Row, Col} from "react-bootstrap";

// Header is used to display the city, displayTime component and the temperature provided by the API

const propTypes = {
	data: PropTypes.object,
	action: PropTypes.func,
};

class Header extends Component {
	render() {
		const {data, action} = this.props;
		const {main,name} = data;

		return (
			<React.Fragment>
					<div className="header">
					<Row className="mb-2 ">
						<Col className="city">{name}</Col>
						<Col><DisplayTime/></Col>
						<Col className="temp">{Math.round(main.temp)}°</Col>
					</Row>
					<Countdown action={action} />
					</div>
			</React.Fragment>
		);
	}
}

Header.propTypes = propTypes;
export default Header;