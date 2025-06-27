import { it, describe, expect } from "vitest";
import fibonacci from "./fibonacci.js";

describe('fibonacci function', () => {
    it('should return 0 for input 0', () => {
        expect(fibonacci(0)).toEqual(0);
    });

    it('should return 1 for input 1', () => {
        expect(fibonacci(1)).toEqual(1);
    });

    it('should return 1 for input 2', () => {
        expect(fibonacci(2)).toEqual(1);
    });

    it('should return 2 for input 3', () => {
        expect(fibonacci(3)).toEqual(2);
    });

    it('should return 3 for input 4', () => {
        expect(fibonacci(4)).toEqual(3);
    });

    it('should return 21 for input 8', () => {
        expect(fibonacci(8)).toEqual(21);
    });

    it('should return 34 for input 9', () => {
        expect(fibonacci(9)).toEqual(34);
    });

    it('should return 55 for input 10', () => {
        expect(fibonacci(10)).toEqual(55);
    });

    it('should return 832040 for input 30', () => {
        expect(fibonacci(30)).toEqual(832040);
    });
    it('should return Error', () => {
        try {
            expect(fibonacci(31)).toEqual(832040);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});

describe('fibonacci function 1', () => {
    it('should return 0 for input 0', () => {
        expect(fibonacci(0)).toEqual(0);
    });

    it('should return 1 for input 1', () => {
        expect(fibonacci(1)).toEqual(1);
    });

    it('should return 1 for input 2', () => {
        expect(fibonacci(2)).toEqual(1);
    });

    it('should return 2 for input 3', () => {
        expect(fibonacci(3)).toEqual(2);
    });

    it('should return 3 for input 4', () => {
        expect(fibonacci(4)).toEqual(3);
    });

    it('should return 21 for input 8', () => {
        expect(fibonacci(8)).toEqual(21);
    });

    it('should return 34 for input 9', () => {
        expect(fibonacci(9)).toEqual(34);
    });

    it('should return 55 for input 10', () => {
        expect(fibonacci(10)).toEqual(55);
    });

    it('should return 832040 for input 30', () => {
        expect(fibonacci(30)).toEqual(832040);
    });
    it('should return Error', () => {
        try {
            expect(fibonacci('a')).toEqual(832040);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});
