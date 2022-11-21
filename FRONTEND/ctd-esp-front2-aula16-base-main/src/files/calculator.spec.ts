import calculator from "../files/calculator";

describe("calculadora", () => {
    it("Add 1 to 2 should return 3", () => {
       expect(calculator.add(1, 2)).toBe(3);
    });

    it("Subtract 2 from 10 should return 8", () => {
        expect(calculator.subtract(10,2)).toBe(8)
    });

    it("Multiply  2 with 8 should return 16", () => {
        expect(calculator.multiply(2,8)).toEqual(16);
    });

    it("Multiply should be idempotent", () => {
        //expect(calculator.multiply(10,1)).toBe(10);
        expect(calculator.multiply(5,0)).toBe(0);
    });

    it("Divide 8 with 2 should return 4", () => {
        expect(calculator.divide(8,2)).toBe(4);
    });
});