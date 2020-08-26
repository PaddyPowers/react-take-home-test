import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const propTypes = {
	action: PropTypes.string,
	temp: PropTypes.string,
	icon: PropTypes.string,
	description: PropTypes.string,
};

class CardWidget extends Component {
	render() {
		
		const {	day, temp, icon, description} = this.props;

		return (
			<div className="card">
					<Row>
						<Col className="day col-4" >{day}</Col>
						<Col className="temp col-2" >{temp}</Col>
						<Col className="icon-description">
							<Row>
								<img className="icon" src={icon}/>
							</Row>
							<Row>
								<div className="description">{description}</div>
							</Row>
			
						</Col>
					</Row>
			</div>
		);
	}
}

CardWidget.propTypes = propTypes;
export default CardWidget;