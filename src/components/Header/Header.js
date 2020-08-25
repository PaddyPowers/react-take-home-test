import React, { Component } from "react";
import PropTypes from "prop-types";
import  DisplayTime  from "../DisplayTime";
import  Countdown  from "../Countdown";
import {Container, Row, Col} from "react-bootstrap";
// Header is the index page and contains company information and widgets to add extra companies or employees.

const propTypes = {
};

class Header extends Component {
	render() {
		const {data} = this.props;
		const {main,name, action} = data

		return (
			<React.Fragment>
					<Container className="header">
					<Row className="mb-2 ">
						<Col className="city">{name}</Col>
						<Col><DisplayTime/></Col>
						<Col className="temp">{Math.round(main.temp)}°</Col>
					</Row>
					<Countdown action={action} />
					</Container>
			</React.Fragment>
		);
	}
}

Header.propTypes = propTypes;
export default Header;