import React, { Component } from "react";
import PropTypes from "prop-types";
import  Header  from "../Header";
import  WeatherDisplay  from "../WeatherDisplay";

const propTypes = {
	currentWeather: PropTypes.object,
	forecastWeather: PropTypes.object,
	getWeather: PropTypes.func,
};

class HomePage extends Component {

	componentDidMount() {
		this.props.getWeather();
	}

	render() {
		const { currentWeather,forecastWeather, getWeather} = this.props;
		if(Object.keys(currentWeather).length === 0 || Object.keys(forecastWeather).length === 0 ){
			return(
				<React.Fragment>
					<Header action={getWeather} data={{name:"",main:{temp:0}}} />
				</React.Fragment>
		);
	}

		return (
			<React.Fragment>
					<Header action={getWeather} data={currentWeather} />
					<WeatherDisplay data={forecastWeather.list}/>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;