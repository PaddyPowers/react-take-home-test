import React, { Component } from "react";
import PropTypes from "prop-types";
import  CardWidget  from "../CardWidget/CardWidget";

class WeatherDisplay extends Component {
	render() {		
		const {	data } = this.props;
		const {	address,revenue,phone,name } = data;

		return (
			<CardWidget linkAddress={linkAdd} className="mb-3" title={name} body={
				<div>
			}  footer={<Link to={linkAdd}>Profile Overview</Link>}/>
		);
	}
}

export default WeatherDisplay;