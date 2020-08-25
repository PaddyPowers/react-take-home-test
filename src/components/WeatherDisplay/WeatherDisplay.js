import React, { Component } from "react";
import PropTypes from "prop-types";
import  CardWidget  from "../CardWidget/CardWidget";
import  {mostFrequent, getDayFromTimestamp, handleWeatherInfo}  from "../../helpers/util.js";
import { CSSTransition } from 'react-transition-group';

class WeatherDisplay extends Component {

	componentDidMount() {
		this.setState((prevState, props) => ({
			display: true,
		})); 
	}

	constructor(){
		super();
		this.state = {
		  display:false,
		};
	}

	render() {		
		const {	data,inProp } = this.props;


		
		var dailyData={};
		data.map(item => {
		   const dateTime = new Date(item.dt * 1000);
		   const day = dateTime.getDate();
		   const time = dateTime.getHours();
		   if(!dailyData[day] )
			dailyData[day]={
				data:[],
				temp:0,
				name: getDayFromTimestamp(item.dt),
			};
		   dailyData[day].data.push({...item,day,time});    
		   dailyData[day].temp += item.main.temp;
		});
		Object.keys(dailyData).map((key, index) => {
			 const weatherCode = mostFrequent(dailyData[key].data.map(segment => segment.weather[0].id));
			 dailyData[key].weatherInfo = handleWeatherInfo(weatherCode[0]);
			 dailyData[key].temp = dailyData[key].temp / dailyData[key].data.length;
		});


		return (
			<React.Fragment>
				<CSSTransition
				in={this.state.display} // boolean value passed via state/props to either mount or unmount this component
				timeout={500}
				classNames='weather-display-list' 
				unmountOnExit
				>
				<div id="weather-display" className="p-2">
				{Object.keys(dailyData).slice(0, 5).map((key, index) => {
					 return <CardWidget key={index} title={dailyData[key].name.substring(0,3)} temp={`${Math.round(dailyData[key].temp)}°`} description={dailyData[key].weatherInfo.description} icon={dailyData[key].weatherInfo.icon} />;
				 })}
				</div>
				</CSSTransition>
			</React.Fragment>
		);
	}
}

export default WeatherDisplay;