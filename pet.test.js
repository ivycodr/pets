
const { TestWatcher } = require('@jest/core');
const Pet = require('./pet');

describe("testing Pet class", () => {

    test("has a name changeName", () => {
        let p1= new Pet("Fido", "Dog", "Brown");
        p1.changeName("Dido");
        expect(p1.name).toBe("Dido");

    })


})
