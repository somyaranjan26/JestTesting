const mathOperations = require('./calculator.js');

describe("Calculator Test", () => {

    test("Adding 1 + 2 = 3", () => {
        // expect(mathOperations.sum(1, 2)).toBe(3);
        var result = mathOperations.sum(1, 2);
        expect(result).toBe(3);
    });

    test("Diffrence 1 - 2 = -1", () => {
        expect(mathOperations.diff(1, 2)).toBe(-1);
    });

    // test("Product 1 * 2 = 2", () => {
    //     expect(mathOperations.product(1, 2)).toBe(2);
    // });

    // Equality Matchers (toBe, toEqual)
    test("Uses matcher for equality", () => {
        expect(2*2).toEqual(4);
        expect(2*2).not.toEqual(5);
    });

    // Truthiness Matchers (toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy)
    test("Uses matcher for truthiness", () => {

        var a = "value";
        var b = null;

        expect(b).toBeNull();
        expect(a).not.toBeNull();
        expect(undefined).toBeUndefined();
        expect(1).toBeDefined();
        expect(a).toBeTruthy();
        expect(0).toBeFalsy();
    })

    // Number Matchers (toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual)
    test("Uses matcher for numbers", () => {
        var a = 1000;
        var b = 0;
        var c = -43;

        expect(a).toBeGreaterThan(b);
        expect(2).toBeGreaterThanOrEqual(2);
        expect(2).toBeLessThan(3);
        expect(2).toBeLessThanOrEqual(12);
    })

    // String Matchers (toMatch)
    test("Uses matcher for strings", () => {
        var a = "Hello World";
        expect(a).toMatch(/World/);
    })

    // Array Matchers (toContain)
    test("Uses matcher for arrays", () => {
        var a = ["Hello", "World"];
        expect(a).toContain("World");
    })

    // Proper SETUP and TEARDOWN
    var a = 0;
    var b = 0;

    beforeAll(() => {
        console.log("Before All");
    })

    afterAll(() => {
        console.log("After All");
    })

    test('Adding 1 + 2 = 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    beforeEach(() => {
        a = 10;
        b = 20;
    })

});

