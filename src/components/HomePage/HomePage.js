import React, { Component } from "react";
import PropTypes from "prop-types";
import  Header  from "../Header/Header";
import  WeatherDisplay  from "../WeatherDisplay/WeatherDisplay";
// Homepage is the index page and contains company information and widgets to add extra companies or employees.

const propTypes = {
};

class HomePage extends Component {

	componentDidMount() {
		this.props.getWeather();
	}

	render() {
		const { currentWeather,forecastWeather , isLoadingData	 } = this.props;

		if(isLoadingData || Object.keys(currentWeather).length === 0 || Object.keys(forecastWeather).length === 0 ){
			return(
				<React.Fragment>
				Loading . . .
				</React.Fragment>
		);
	}

		return (
			<React.Fragment>
					<Header data={currentWeather} />
					<WeatherDisplay data={forecastWeather.list}/>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;