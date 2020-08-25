import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

// Card Widget is a reusable widget that can display a title, body and footer.

class CardWidget extends Component {
	render() {
		
		const {	title, temp, icon, description} = this.props;

		return (
			<div className="card">
					<Row>
						<Col className="day col-4" >{title}</Col>
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


export default CardWidget;