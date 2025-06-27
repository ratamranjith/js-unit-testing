import { it, expect, describe } from "vitest";
import generatorsExample from "./generator.js";

describe('generator function', () => {
    it('should return an array from 0 to 9', () => {
        expect(generatorsExample()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should get pass', () => {
        expect(generatorsExample()).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
