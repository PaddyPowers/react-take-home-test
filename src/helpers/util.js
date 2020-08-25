const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

export function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

export function getDayFromTimestamp(timestamp){
    var dayNum = new Date(timestamp * 1000).getDay();
    return days[dayNum];
}