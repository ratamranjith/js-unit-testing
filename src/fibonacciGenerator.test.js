import { it, expect, describe } from 'vitest';
import fibonacciGenerator from "./fibonacciGenerator.js";

describe('fibonacciGenerator function', () => {
    it('should return an array from 0 to 9', () => {
        expect([...fibonacciGenerator(36)]).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});