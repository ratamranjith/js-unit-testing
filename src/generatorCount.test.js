import { it, expect, describe } from "vitest";
import countFn from "./generatorCount.js";

describe('Generator function with count', () => {
    it('should increment the count from the generator', () => {
        let c = countFn(10);
        expect([...c]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('should throw an error', () => {
        let c = countFn(11);
        expect(() => [...c]).toThrowError;
    })
})