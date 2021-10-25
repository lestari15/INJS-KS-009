const { incrementQty, decrementQty } = require("../helpers.js");

test("increment +1", () =>{
    expect(incrementQty(5).toBe(6));
});