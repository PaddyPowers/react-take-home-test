import React, { Component } from "react";
import PropTypes from "prop-types";
import  Header  from "../Header/Header";
// Homepage is the index page and contains company information and widgets to add extra companies or employees.

const propTypes = {
	addCompany: PropTypes.func.isRequired,
	addPerson: PropTypes.func.isRequired,
};

class HomePage extends Component {
	render() {
		const {	addCompany,addPerson, companies } = this.props;

		return (
			<React.Fragment>
					<Header/>
					{/* <WeatherWidget/> */}
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;