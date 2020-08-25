const util = require("./util.js");

test('Expect Correct Day from Timestamp', () => {
    expect(util.getDayFromTimestamp()).toBe('Tuesday');
});