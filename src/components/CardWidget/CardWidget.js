import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Card Widget is a reusable widget that can display a title, body and footer.

class CardWidget extends Component {
	render() {
		
		const {	title, body, linkAddress, footer} = this.props;

		let cardFooter;

		if(typeof footer !== "undefined")
		{
			cardFooter = footer;
		}

		let header =  <Card.Header><h5 className="mt-2">{title}</h5></Card.Header>;
		if(typeof linkAddress !== "undefined"){
			header = <Link to={linkAddress}>{header}</Link>;
		}

		return (
			<Card className="mb-3">
				{header}
				<Card.Body>
					{body}
				</Card.Body>
				<Card.Footer>{cardFooter}</Card.Footer>
			</Card>
		);
	}
}


export default CardWidget;