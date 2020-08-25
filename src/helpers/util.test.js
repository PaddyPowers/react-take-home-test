const util = require("./util.js");

test('Expect Correct Day from Timestamp', () => {
    expect(util.getDayFromTimestamp(1598393302)).toBe('Tuesday');
});

test('Expect Most Frequent Item', () => {
    expect(util.mostFrequent(["1","4","6","3","2","1","5","3","3"])).toBe("3");
});

