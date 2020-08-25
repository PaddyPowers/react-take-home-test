const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

const weatherIcons = {
    "200":{	name:"Thunderstorm",	description:"thunderstorm with light rain",	 icon:"11d"},
    "201":{	name:"Thunderstorm",	description:"thunderstorm with rain",	 icon:"11d"},
    "202":{	name:"Thunderstorm",	description:"thunderstorm with heavy rain",	 icon:"11d"},
    "210":{	name:"Thunderstorm",	description:"light thunderstorm",	 icon:"11d"},
    "211":{	name:"Thunderstorm",	description:"thunderstorm",	 icon:"11d"},
    "212":{	name:"Thunderstorm",	description:"heavy thunderstorm",	 icon:"11d"},
    "221":{	name:"Thunderstorm",	description:"ragged thunderstorm",	 icon:"11d"},
    "230":{	name:"Thunderstorm",	description:"thunderstorm with light drizzle",	 icon:"11d"},
    "231":{	name:"Thunderstorm",	description:"thunderstorm with drizzle",	 icon:"11d"},
    "232":{	name:"Thunderstorm",	description:"thunderstorm with heavy drizzle",	 icon:"11d"},
    "300":{	name:"Drizzle",	description:"light intensity drizzle",	 icon:"09d"},
    "301":{	name:"Drizzle",	description:"drizzle",	 icon:"09d"},
    "302":{	name:"Drizzle",	description:"heavy intensity drizzle",	 icon:"09d"},
    "310":{	name:"Drizzle",	description:"light intensity drizzle rain",	 icon:"09d"},
    "311":{	name:"Drizzle",	description:"drizzle rain",	 icon:"09d"},
    "312":{	name:"Drizzle",	description:"heavy intensity drizzle rain",	 icon:"09d"},
    "313":{	name:"Drizzle",	description:"shower rain and drizzle",	 icon:"09d"},
    "314":{	name:"Drizzle",	description:"heavy shower rain and drizzle",	 icon:"09d"},
    "321":{	name:"Drizzle",	description:"shower drizzle",	 icon:"09d"},
    "500":{	name:"Rain",	description:"light rain",	 icon:"10d"},
    "501":{	name:"Rain",	description:"moderate rain",	 icon:"10d"},
    "502":{	name:"Rain",	description:"heavy intensity rain",	 icon:"10d"},
    "503":{	name:"Rain",	description:"very heavy rain",	 icon:"10d"},
    "504":{	name:"Rain",	description:"extreme rain",	 icon:"10d"},
    "511":{	name:"Rain",	description:"freezing rain",	 icon:"13d"},
    "520":{	name:"Rain",	description:"light intensity shower rain",	 icon:"09d"},
    "521":{	name:"Rain",	description:"shower rain",	 icon:"09d"},
    "522":{	name:"Rain",	description:"heavy intensity shower rain",	 icon:"09d"},
    "531":{	name:"Rain",	description:"ragged shower rain",	 icon:"09d"},
    "600":{	name:"Snow",	description:"light snow",	 icon:"13d"},
    "601":{	name:"Snow",	description:"Snow",	 icon:"13d"},
    "602":{	name:"Snow",	description:"Heavy snow",	 icon:"13d"},
    "611":{	name:"Snow",	description:"Sleet",	 icon:"13d"},
    "612":{	name:"Snow",	description:"Light shower sleet",	 icon:"13d"},
    "613":{	name:"Snow",	description:"Shower sleet",	 icon:"13d"},
    "615":{	name:"Snow",	description:"Light rain and snow",	 icon:"13d"},
    "616":{	name:"Snow",	description:"Rain and snow",	 icon:"13d"},
    "620":{	name:"Snow",	description:"Light shower snow",	 icon:"13d"},
    "621":{	name:"Snow",	description:"Shower snow",	 icon:"13d"},
    "622":{	name:"Snow",	description:"Heavy shower snow",	 icon:"13d"},
    "701":{	name:"Mist",	description:"mist",	 icon:"50d"},
    "711":{	name:"Smoke",	description:"Smoke",	 icon:"50d"},
    "721":{	name:"Haze",	description:"Haze",	 icon:"50d"},
    "731":{	name:"Dust",	description:"sand/ dust whirls",	 icon:"50d"},
    "741":{	name:"Fog",	description:"fog",	 icon:"50d"},
    "751":{	name:"Sand",	description:"sand",	 icon:"50d"},
    "761":{	name:"Dust",	description:"dust",	 icon:"50d"},
    "762":{	name:"Ash",	description:"volcanic ash",	 icon:"50d"},
    "771":{	name:"Squall",	description:"squalls",	 icon:"50d"},
    "781":{	name:"Tornado",	description:"tornado",	 icon:"50d"},
    "800":	{name:"Clear",description:"clear sky"	 ,icon:"01d", nightAvaliable:true},
    "801":	{name:"Clouds",description:"few clouds 11-25%"	 ,icon:"02d", nightAvaliable:true},
    "802":	{name:"Clouds",description:"scattered clouds 25-50%"	 ,icon:"03d", nightAvaliable:true},
    "803":	{name:"Clouds",description:"broken clouds 51-84%"	 ,icon:"04d", nightAvaliable:true},
    "804":	{name:"Clouds",description:"overcast clouds 85-100%",icon:"04d", nightAvaliable:true},
    };
    

const weatherApi = {
    url:"http://openweathermap.org/img/wn/",
    scale:"2x",
    fileType:'.png',
    mapping:weatherIcons
};



export function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

export function getDayFromTimestamp(timestamp){
    var dayNum = new Date(timestamp * 1000).getDay();
    return days[dayNum];
}

const mostFrequent = data => data.reduce((r,c,i,a) => {
    r[c] = (r[c] || 0) + 1
    r.max = r[c] > r.max ? r[c] : r.max
    if(i == a.length-1) {
      r = Object.entries(r).filter(([k,v]) => v == r.max && k != 'max')
      return r.map(x => x[0])
    }
    return r
  }, {max: 0});


const handleWeatherInfo = key => {
    return {
        icon:`${weatherApi.url}${weatherApi.mapping[key].icon}@${weatherApi.scale}${weatherApi.fileType}`,
        description:weatherApi.mapping[key].description
    };
};

export { mostFrequent , handleWeatherInfo};