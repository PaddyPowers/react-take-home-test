import React, { Component } from "react";
import PropTypes from "prop-types";
import  CardWidget  from "../CardWidget/CardWidget";
import  {mostFrequent, getDayFromTimestamp, handleWeatherInfo}  from "../../helpers/util.js";

class WeatherDisplay extends Component {
	render() {		
		const {	data } = this.props;
		
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
				{Object.keys(dailyData).map((key, index) => {
					 return <CardWidget key={index} title={dailyData[key].name} body={`${Math.round(dailyData[key].temp)}° ${dailyData[key].weatherInfo.description}`} icon={dailyData[key].weatherInfo.icon} />;
				 })}
			</React.Fragment>
		);
	}
}

export default WeatherDisplay;