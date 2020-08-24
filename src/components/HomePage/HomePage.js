import React, { Component } from "react";
import PropTypes from "prop-types";
import  Header  from "../Header/Header";
// Homepage is the index page and contains company information and widgets to add extra companies or employees.

const propTypes = {
};

class HomePage extends Component {

	componentDidMount() {
		this.props.getWeather();
	}

	render() {
		const { currentWeather,forecastWeather , isLoadingData	 } = this.props;

		if(isLoadingData || (Object.keys(currentWeather).length === 0 && currentWeather.constructor === Object)){
			return(
				<React.Fragment>
				Loading . . .
				</React.Fragment>
		);
	}

		return (
			<React.Fragment>
					<Header data={currentWeather} />
					{/* <WeatherWidget/> */}
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;