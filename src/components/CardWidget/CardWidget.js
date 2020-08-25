import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

// Card Widget is a reusable widget that can display a title, body and footer.

class CardWidget extends Component {
	render() {
		
		const {	title, body, icon} = this.props;

		return (
			<div className="card">
					<Row>
						<Col className="day" >{title}</Col>
						<Col className="temp" >{body}°</Col>
						<Col><img src={icon}/></Col>
					</Row>
			</div>
		);
	}
}


export default CardWidget;