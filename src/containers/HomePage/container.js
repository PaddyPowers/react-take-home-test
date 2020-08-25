import { connect } from "react-redux";
import HomePage from "components/HomePage";
import { fetchCurrentWeather, fetchForecastWeather } from "../../actions";

const mapDispatchToProps = dispatch => ({
	getWeather: (data) => {
		dispatch(fetchCurrentWeather(data));
		dispatch(fetchForecastWeather(data));
	},
	startTimer: (data) => {
		dispatch(startTimer(data));
	},
	updateTimer: (data) => {
		dispatch(updateTimer(data));
	},
	resetTimer: (data) => {
		dispatch(resetTimer(data));
	},
});


const mapStateToProps = ({ currentWeather = {} , forecastWeather = {}, isLoadingData = false }) => ({
	currentWeather,
	forecastWeather,
	isLoadingData
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

