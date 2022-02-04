const addition = require ('../calc');

describe('Calculator', () => {
    describe('Addition function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        });
        test('should return 73 for 42 + 31', () => {
            expect(addition(42, 31)).toBe(73);
        });
        test('should return 0 for -1 + 1', () => {
            expect(addition(-1, 1)).toBe(0);
        });
        test('should return -2 for -1 + -1', () => {
            expect(addition(-1, -1)).toBe(-2);
        });

    });
    describe('Subtraction function', () =>{

    });
    describe('Multiply function', () =>{

    });
    describe('Division function', () =>{

    });
})