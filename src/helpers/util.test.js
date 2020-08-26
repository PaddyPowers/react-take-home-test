const util = require("./util.js");
describe("Utility Functions", () => {
    test("Expect Correct Day from Timestamp", () => {
        expect(util.getDayFromTimestamp(1598393302)).toBe("Tuesday");
    });

    test("Expect Most Frequent Item", () => {
        expect(util.mostFrequent(["1","4","6","3","2","1","5","3","3"])).toBe("3");
    });

    test("Expect Correct URL and description from Weather Handler", () => {
        expect(util.handleWeatherInfo("200")).toStrictEqual({"description": "thunderstorm with light rain", "icon": "http://openweathermap.org/img/wn/11d@2x.png"});
    });
});
