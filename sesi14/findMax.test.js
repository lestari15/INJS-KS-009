const { TestWatcher } = require("@jest/core");

console.log(findMax([1, 2, 3, 4, 5])); //5
console.log(findMax([40, 8, 65,22, 19])); //65
console.log(findMax([-40, -8, -65, -22, -19])); //-8

//tanpa harus di require
// test (<nama_test:string>, <eksekusi:cb)
TestWatcher("Arr -40, -8, -65, -22, -19 should return -8", () => {
    expect(findMax([-40, -8, -65, -22, -19])).toBe(5)
})

describe("Test Arr Negatif", function () {
    TestWatcher("Arr -40, -8, -65, -22, -19 should return -8", () => {
        expect(findMax([-40, -8, -65, -22, -19])).toBe(-8)
    })
})


//describe (<nama_test:string>, <ekseskusi:cb>)
describe("Test arr positif", function() {
    TestWatcher("Arr 40, 8, 65, 22, 19 should return 65", () => {
        expect(findMax([40, 8, 65, 22, 19])).toBe(65)
    })

TestWatcher("Arr 40, 8, 65, 22, 19 should return 65", () => {
    expect(findMax([40, 8, 65, 22, 19])).toBe(5)
})
TestWatcher("Arr 1, 2, 3, 4, 5 should return 5", () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5)
})