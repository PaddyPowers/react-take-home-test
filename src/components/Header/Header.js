import React, { Component } from "react";
import PropTypes from "prop-types";
import {Container, Row, Col} from "react-bootstrap";
// Header is the index page and contains company information and widgets to add extra companies or employees.

const propTypes = {
};

class Header extends Component {
	render() {
		const {location, time, temperature, refreshStatus} = this.props;

		return (
			<React.Fragment>
					<Container>
					<Row>
						<Col>1 of 2</Col>
						<Col>2 of 2</Col>
						<Col>3 of 3</Col>
					</Row>
					</Container>
			</React.Fragment>
		);
	}
}

Header.propTypes = propTypes;
export default Header;