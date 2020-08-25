import React, { Component } from "react";
import PropTypes from "prop-types";
import {Container, Row, Col} from "react-bootstrap";
// Header is the index page and contains company information and widgets to add extra companies or employees.

const propTypes = {
};

class Header extends Component {
	render() {
		const {data} = this.props;
		const {main,name} = data

		return (
			<React.Fragment>
					<Container>
					<Row>
						<Col>{name}</Col>
						<Col>time</Col>
						<Col>{Math.round(main.temp)}°</Col>
					</Row>
					</Container>
			</React.Fragment>
		);
	}
}

Header.propTypes = propTypes;
export default Header;