import weatherIcons from "../resources/weather-icons.json";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

const weatherApi = {
    url:"http://openweathermap.org/img/wn/",
    scale:"2x",
    fileType:".png",
    mapping:weatherIcons
};

const getDayFromTimestamp = timestamp => {
    var dayNum = new Date(timestamp * 1000).getDay();
    return days[dayNum];
};

const mostFrequent = data => data.reduce((r,c,i,a) => {
    r[c] = (r[c] || 0) + 1;
    r.max = r[c] > r.max ? r[c] : r.max;
    if(i == a.length-1) {
      r = Object.entries(r).filter(([k,v]) => v == r.max && k != "max");
      return r.map(x => x[0]);
    }
    return r;
  }, {max: 0})[0];


const handleWeatherInfo = key => {
    return {
        icon:`${weatherApi.url}${weatherApi.mapping[key].icon}@${weatherApi.scale}${weatherApi.fileType}`,
        description:weatherApi.mapping[key].description
    };
};

export { mostFrequent , handleWeatherInfo, getDayFromTimestamp};